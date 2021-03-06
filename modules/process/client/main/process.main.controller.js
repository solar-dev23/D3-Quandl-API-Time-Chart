'use strict';

angular.module('process')
    .controller('ProcessMainController',
    ['$state', '$stateParams', '$q', '$uibModal', 'Datasets', 'UsersFactory', 'Authentication', 'Tasks', 'Process', 'Deployr', 'toastr', '$log',
        function ($state, $stateParams, $q, $uibModal, Datasets, UsersFactory, Authentication, Tasks, Process, Deployr, toastr, $log) {
            var vm = this;
            var runningTask = null;

            vm.alerts = [];
            vm.user = Authentication.user;
            vm.showLoader = false;
            vm.showProcessLoader = false;
            vm.selectedDataset = '';
            vm.totalItems = 0;
            vm.currentPage = 1;
            vm.itemsPerPage = 50;
            vm.origRows = [];

            vm.dataset = {
                rows: [],
                columns: []
            };
            vm.s3reference = '';
            vm.process = null;

            function getDatasets() {
                UsersFactory.userData('datasets', vm.user.username)
                    .then(function (datasets) {
                        vm.usersDatasets = datasets;
                        Process.setUsersDatasets(datasets);
                    });
            }

            getDatasets();

            vm.pageChanged = function () {
                vm.dataset.rows = _.chain(vm.origRows)
                    .slice(vm.itemsPerPage * (vm.currentPage - 1))
                    .take(vm.itemsPerPage)
                    .value();
            };

            vm.onDatasetChange = function (dataset, resetOptions) {
                // re-initialize table data
                vm.dataset.rows = [];
                vm.dataset.columns = [];
                vm.origRows = [];
                vm.process = null;

                // invalidate any dataset specific options
                if (resetOptions && vm.process && vm.process.tasks) {
                    vm.process.tasks.forEach(function (task) {
                        if (task.datasetChanged) {
                            task.datasetChanged(task.options);
                        }
                    });
                }

                // Persist selected dataset
                Process.setSelectedDataset(dataset);
                vm.selectedDataset = dataset.title;
                vm.s3reference = dataset.s3reference.split('datasetstl')[1];
                vm.showLoader = true;
                Datasets.getDatasetWithS3(dataset._id)
                    .then(function (data) {
                        vm.showLoader = false;
                        vm.dataset.columns = data.columns;
                        vm.origRows = data.rows;
                        vm.totalItems = vm.origRows.length;
                        vm.dataset.rows = _.take(vm.origRows, vm.itemsPerPage);
                    });

                Process.getByUser(dataset._id, vm.user._id)
                    .then(function (processes) {
                        vm.usersProcesses = processes;
                    });
            };

            // The Lab page has received data from the process modal.
            // the update in state unfortunately requires a reload which
            // resets the state of the controller. Until a better solution
            // is implemented, going with restoring the previous state for now.
            if ($stateParams.data && $stateParams.data.process) {

                // re-append script property from the original task,
                // as some of the nested properties are functions which
                // are automatically stripped when sent as route params
                $stateParams.data.process.tasks.forEach(function (task) {
                    var originalTask = Tasks.getSubtaskByTitle(task.title);
                    if (originalTask) {
                        task = _.extend(task, {
                            script: originalTask.script,
                            validate: originalTask.validate,
                            datasetChanged: originalTask.datasetChanged
                        });
                    }
                });

                if ($stateParams.data.type === 'create') {
                    Process.setSelectedProcess(_.extend($stateParams.data.process, {
                        user: vm.user._id
                    }));
                } else {
                    Process.setSelectedProcess(
                        _.extend(Process.getSelectedProcess(), $stateParams.data.process)
                    );
                }

                vm.process = Process.getSelectedProcess();

                var selectedDataset = Process.getSelectedDataset();
                if (selectedDataset) {
                    vm.selectedDataset = selectedDataset.title;
                    vm.onDatasetChange(selectedDataset);
                }
            }

            // If the lab page has been opened up by clicking the "edit"
            // button on a dataset from "My Data" page, pre-select
            // the dataset
            if ($stateParams.data && $stateParams.data.dataset) {
                vm.onDatasetChange($stateParams.data.dataset);
            }

            vm.openModal = function (type) {
                if (!vm.selectedDataset && (vm.dataset.rows.length || vm.dataset.columns.length)) {
                    toastr.error('Please save the dataset before proceeding');
                    return;
                } else if (!vm.selectedDataset) {
                    toastr.error('Please select a datatset');
                    return;
                }
                $state.go('lab.process.popup', {type: type}, {
                    reload: 'lab.process.popup'
                });
            };

            vm.onProcessChange = function (process) {
                if (vm.process && vm.process._id && process._id && vm.process._id === process._id) {
                    return;
                }
                vm.process = _.cloneDeep(process);
                vm.process.tasks = vm.process.tasks.map(function (task) {
                    var originalTask = Tasks.getSubtaskByTitle(task.title);
                    return originalTask || task;
                });
                Process.setSelectedProcess(vm.process);
            };

            vm.saveProcess = function () {
                var process = _.clone(vm.process);
                process.tasks = process.tasks.map(function (task) {
                    return _.pick(task, ['title', 'slug']);
                });
                if (process._id) {
                    Process.update(process)
                        .then(function (process) {
                            toastr.success('Process updated successfully!');
                            var index = _.findIndex(vm.usersProcesses, {_id: process._id});
                            vm.usersProcesses[index] = process;
                        });
                } else {
                    process.dataset = Process.getSelectedDataset()._id;
                    Process.create(process)
                        .then(function (process) {
                            toastr.success('Process created successfully!');
                            vm.usersProcesses.push(process);
                        });
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

            function process(inputFile, tasks, deferred, results) {
                if (!deferred) deferred = $q.defer();
                if (!results) results = [];
                Deployr.run(inputFile, tasks[0])
                    .then(function (res) {
                        var result = res;
                        if (tasks[0].returnType === 'dataset') {
                            if (!result.length) {
                                return deferred.reject('one of the tasks returned empty dataset!');
                            }
                            var _dataset = {
                                columns: result[0].value.map(function (obj) {
                                    return obj.name;
                                })
                            };
                            _dataset.rows = getRowsFromResult(result, _dataset.columns);
                            results.push(_dataset);
                            if (typeof tasks[1] !== 'undefined') {
                                return process(_dataset, _.drop(tasks), deferred, results);
                            }
                        } else {
                            results.push(result);
                        }
                        return deferred.resolve(results);
                    }).catch(function (error) {
                        deferred.reject(error);
                    });
                return deferred.promise;
            }

            vm.performProcess = function () {
                var invalidTasks = vm.process.tasks.filter(function (task) {
                    return task.validate && !task.validate(task.options);
                });
                if (invalidTasks.length) {
                    toastr.error('Please select the required options for the tasks present in the process!');
                    return;
                }
                vm.showProcessLoader = true;
                process(vm.s3reference, vm.process.tasks.filter(function (task) {
                    return task.script;
                }))
                    .then(function (results) {
                        if (results[0].status === 200) {
                            var modalInstance = $uibModal.open({
                                controller: 'ModelModalController',
                                controllerAs: 'ModelModal',
                                templateUrl: 'modules/process/client/model/model.modal.html',
                                size: 'md',
                                backdrop: true,
                                resolve: {
                                    selectedDataset: function () {
                                        return Process.getSelectedDataset();
                                    },
                                    tasks: function () {
                                        return vm.process.tasks;
                                    },
                                    results: function () {
                                        return [results[0].text];
                                    }
                                }
                            });
                            modalInstance.result.then(function (model) {
                                vm.alerts.push({
                                    type: 'success',
                                    msg: 'The result has been successfully saved!'
                                });
                                getDatasets();
                            });
                        }
                        else {
                            $log.debug(results);
                            toastr.error('An error occurred while processing.');
                        }

                    })
                    .catch(function (err) {
                        console.log('error', err);
                        if (err instanceof Error) {
                            alert(err.message || err);
                        }
                    })
                    .finally(function () {
                        vm.showProcessLoader = false;
                    });
            };

            vm.cancelProcess = function () {
                if (runningTask) {
                    runningTask.cancel(true);
                    runningTask = null;
                }
            };

            vm.closeAlert = function (index) {
                vm.alerts.splice(index, 1);
            };

        }]);
