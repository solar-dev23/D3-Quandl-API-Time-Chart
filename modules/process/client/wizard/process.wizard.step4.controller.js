'use strict';

angular.module('process')
    .controller('ProcessWizardStep4Controller',
    ['$state', '$stateParams', '$timeout', 'Tasks', 'Deployr', '$uibModal', '$q', 'toastr', 'Process', '$log',
        'ProcessStateService', 'prompt',
        function ($state, $stateParams, $timeout, Tasks, Deployr, $uibModal, $q, toastr, Process, $log,
                  ProcessStateService, prompt) {
            var baseStateUrl = 'lab.process2.step4';
            var vm = this;
            var runningTask = null;
            vm.showProcessLoader = false;

            vm.taskoptionsview = '';

            vm.process = ProcessStateService.currentProcessTasksData();
            vm.processData = ProcessStateService.currentProcessData();

            vm.showPlaceholderTooltip = true;

            vm.tasks = Tasks.getTasks();
            vm.displayTasks = _.filter(vm.tasks, function(task){
                return !task.hideinlist;
            });
            vm.displayTasks.forEach(function(task, i) {
                task.status = {
                    open: i === 0
                };
                task.subtasks.forEach(function(subtask) {
                    subtask.color = task.color;
                });
            });

            // we only have title and slug in the received process
            // therefore, appending returnTypes from the tasks static array
            vm.process.tasks.forEach(function(task) {
                task.returnType = _.compact(vm.tasks.map(function(_task) {
                    return _.find(_task.subtasks, {title: task.title});
                }))[0].returnType;
            });

            if (vm.process.tasks.length > 1){
                vm.showPlaceholderTooltip = false;
            }

            function setEndpoint(task){
                _.each(vm.process.tasks, function (currenttask) {
                    currenttask.endpoint = false;
                    currenttask.disabled = false;
                });
                task.endpoint = true;
                var endpointreach = false;
                _.each(vm.process.tasks, function (currenttask) {
                    if (endpointreach){
                        currenttask.disabled = true;
                    }
                    if (!endpointreach && currenttask.endpoint){
                        endpointreach = true;
                    }
                });
            }

            if (vm.process.tasks.length){
                setEndpoint(vm.process.tasks[vm.process.tasks.length - 1]);
            }

            // save current task options before closing the modal,
            // or showing options for another task
            function updateTaskOptions() {
                /*if ($state.params && $state.params.options) {
                    var slug = $state.current.url.slice(1);
                    var task = _.find(vm.process.tasks, function(task) {
                        return task.slug === slug;
                    });
                    if (task) {
                        task.options = $state.params.options;
                    }
                }*/
            }

            function showTaskOptions(task) {
                if (task && task.slug) {
                    $state.go(baseStateUrl + '.' + task.slug, { id: vm.process.tasks.indexOf(task), options: task.options});
                }
            }

            // disable drag if this task is already dropped
            vm.disableDrag = function(task) {
                return _.find(vm.process.tasks, {title: task.title});
            };

            // 1. Set a boolean indicating if the task is of type dataset or
            // model.
            // 2. disallow any task with return type "model" to be dropped
            // in between other tasks
            // 3. disallow any task to be added next to a task having return
            // type "model".
            vm.onDrag = function(event, index, type) {
                $timeout(function() {
                    vm.showPlaceholderArrow = true;
                }, 0);
                /*return !((type === 'model' && index <= vm.process.tasks.length - 1) ||
                ((_.last(vm.process.tasks) || {}).returnType === 'model' && index >= vm.process.tasks.length));*/
                return true;
            };

            vm.onCopy = function(event, index, task) {
                if (!_.find(vm.process.tasks, {title: task.title})) {
                    updateTaskOptions();
                    vm.process.tasks.splice(index, 1, task);
                    if (index === vm.process.tasks.length - 1){
                        setEndpoint(task);
                    }
                    ProcessStateService.saveProcessTasksData(vm.process);
                    showTaskOptions(vm.process.tasks[index]);
                    /*if (index === vm.process.tasks.length - 1){
                        setEndpoint(vm.process.tasks[index]);
                    }*/
                }
                vm.showPlaceholderArrow = false;
                vm.showPlaceholderTooltip = false;
                return true;
            };

            vm.onTaskClick = function(task) {
                if (task.title === 'Initial Transformations'){
                    $state.go('lab.process2.step3');
                }
                else{
                    showTaskOptions(task);
                }

            };

            function getRowsFromResult(result, columns) {
                return _.zip.apply(_, result[0].value.map(function (obj) {
                    return obj.value;
                })).map(function (rowValues) {
                    var row = {};
                    rowValues.forEach(function (rowValue, i) {
                        row[columns[i]] = rowValue;
                    });
                    return row;
                });
            }

            function process(tasks, deferred, results) {
                if (!deferred) deferred = $q.defer();
                if (!results) results = [];
                Deployr.run(tasks, vm.processData)
                    .then(function (res) {
                        var result = res;
                        results.push(result);
                        return deferred.resolve(results);
                    }).catch(function (error) {
                        deferred.reject(error);
                    });
                return deferred.promise;
            }

            vm.performProcess = function () {

                var endpoint = _.find(vm.process.tasks, { endpoint : true });
                if (!endpoint){
                    toastr.error('You need to set a workflow endpoint of where you would like your workflow to stop!');
                    return;
                }

                //Reattach validate function as it gets removed on copy
                var subtasks = [];
                _.each(vm.tasks, function(task){
                    if (task.subtasks){
                        subtasks = subtasks.concat(task.subtasks);
                    }
                });

                _.each(vm.process.tasks, function(task){
                    var subtask = _.find(subtasks, { title : task.title });
                    if (subtask.validate){
                        task.validate = subtask.validate;
                    }
                });

                // Check if any of the tasks options is invalid
                var invalidTasks = vm.process.tasks.filter(function (task) {
                    var invalid = task.validate && !task.validate(task.options);
                    if (invalid){
                        task.invalid = true;
                    }
                    else{
                        delete task.invalid;
                    }
                    return invalid;
                });
                if (invalidTasks.length) {
                    toastr.error('Please select the required options for the tasks present in the process!');
                    return;
                }
                vm.showProcessLoader = true;
                process(vm.process.tasks)
                    .then(function (results) {
                        //if (results[0].status === 200) {
                            var modalInstance = $uibModal.open({
                                controller: 'ModelModalController',
                                controllerAs: 'ModelModal',
                                templateUrl: 'modules/process/client/model/model.modal.html',
                                size: 'md',
                                backdrop: 'static',
                                resolve: {
                                    selectedDataset: function () {
                                        //return Process.getSelectedDataset();
                                    },
                                    tasks: function () {
                                        return vm.process.tasks;
                                    },
                                    results: function () {
                                        return results[0];
                                    },
                                    processData: function() {
                                        return vm.processData;
                                    }
                                }
                            });
                            modalInstance.result.then(function (model) {
                                vm.alerts.push({
                                    type: 'success',
                                    msg: 'The result has been successfully saved!'
                                });
                                //getDatasets();
                            });
                        //}
                        //else {
                        //    $log.debug(results);
                        //    toastr.error('An error occurred while processing.');
                        //}

                    })
                    .catch(function (err) {
                        console.log('error', err);
                        $log.debug(JSON.stringify(err.err.deployr.response));
                        toastr.error('An error occurred while running the workflow!');
                    })
                    .finally(function () {
                        vm.showProcessLoader = false;
                    });
            };

            vm.removeTask = function(task){
                prompt({
                    title: 'Confirm?',
                    message: 'Are you sure you want to remove this task?'
                }).then(function() {
                    vm.process.tasks = _.without(vm.process.tasks, task);
                    //check if endpoint is set
                    if (vm.process.tasks.length > 0){
                        var endpoint = _.find(vm.process.tasks, { endpoint : true });
                        if (!endpoint){
                            setEndpoint(vm.process.tasks[vm.process.tasks.length - 1]);
                        }
                    }
                    ProcessStateService.saveProcessTasksData(vm.process);
                });
            };

            vm.cancelProcess = function () {
                if (runningTask) {
                    runningTask.cancel(true);
                    runningTask = null;
                }
            };

            vm.setEndpoint = function(task) {
                setEndpoint(task);
            };

            vm.saveProcess = function(){
                var process = _.clone(vm.process);

                if (process.title === ''){
                    toastr.error('Please provide a workflow title.');
                    return;
                }
                process.dataset = ProcessStateService.currentProcessData().selecteddataset;
                if (ProcessStateService.currentProcessData().selectedmodel){
                    process.model = ProcessStateService.currentProcessData().selectedmodel;
                }
                process.type = ProcessStateService.currentProcessData().step1selection;

                if (process._id) {
                    Process.update(process)
                        .then(function (process) {
                            toastr.success('Process updated successfully!');
                        })
                        .catch(function(err){
                            $log.error(err);
                            toastr.error(err.message);
                        });
                } else {
                    Process.create(process)
                        .then(function (process) {
                            vm.process._id = process._id;
                            ProcessStateService.saveProcessTasksData(vm.process);
                            toastr.success('Process created successfully!');
                        })
                        .catch(function(err){
                            $log.error(err);
                            toastr.error(err.message);
                        });
                }
            };

        }]);
