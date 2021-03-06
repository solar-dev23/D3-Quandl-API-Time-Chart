'use strict';

/* global moment */

//datasets List Controller
angular.module('datasets').controller('DatasetsListController', ['$state', '$stateParams', '$sce', '$modal', 'Authentication',
                                        'Datasets','UsersFactory', 'toastr', '$log', 'prompt', 'BillingService', '$rootScope', 'ModelsService',
    function ($state, $stateParams, $sce, $modal, Authentication, Datasets, UsersFactory, toastr, $log, prompt, BillingService, $rootScope, ModelsService) {
        var vm = this;

        vm.authentication = Authentication;
        vm.user = Authentication.user;

        vm.resolved = false;
        vm.loading = false;

        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage = 50;
        vm.pageChanged = function(){
            loadSearchData();
        };
        
        vm.ownership = UsersFactory.ownership();
        vm.showCreate = $state.current.name == 'datasets.list' || $state.current.name == 'datasets.search';
        vm.myDatasets = $state.current.name == 'users.profilepage.datasets';

        $rootScope.$on('set-dataset-search', function(event, data){
            vm.q = data;
        });
        
        vm.load = function () {
            vm.resolved = false;
            vm.loading = true;
        };

        vm.loaded = function () {
            vm.resolved = true;
            vm.loading = false;
        };

        if ($stateParams.search){
            vm.q = $stateParams.search;
            loadSearchData();
        }

        function loadSearchData(){
            Datasets.search(vm.q, vm.itemsPerPage, vm.currentPage)
                .success(function (response) {
                    vm.list = response.datasets;
                    vm.totalItems = response.count;
                    vm.loaded();
                })
                .error(function (error) {
                    vm.loaded();
                });
        }

        function removeDataset(dataset){
            Datasets.remove(dataset)
                .then(function () {
                    vm.list = _.without(vm.list, dataset);
                    toastr.success('Dataset deleted successfully.');
                })
                .catch(function (err) {
                    $log.error(err);
                    toastr.error('Error deleting dataset.');
                });
        }


        vm.deleteDataset = function(dataset){
            if (vm.user._id === dataset.user._id || vm.user._id === dataset.user){
                ModelsService.findmodelbydataset(dataset._id)
                    .then(function(model){
                        if (model === null){
                            prompt({
                                title: 'Confirm Delete?',
                                message: 'Are you sure you want to delete this dataset?'
                            }).then(function() {
                                removeDataset(dataset);
                            });
                        }
                        else{
                            prompt({
                                title: 'Is that ok?',
                                message: 'This dataset was used to fit a model - if you delete the dataset, the model you created with it will be deleted as well?'
                            }).then(function() {
                                ModelsService.remove(model);

                                removeDataset(dataset);
                            });
                        }

                    })
                    .catch(function(err){
                        $log.error(err);
                        toastr.error('Error loading model.');
                    });


            }
        };

        vm.filterData = function (field, value) {
            vm.load();
            Datasets.filter(field, value).then(function (res) {
                vm.list = res.data;
                vm.loaded();
            }, function (err) {
                vm.loaded();
            });
        };

        vm.purchaseDataset = function(dataset){
            BillingService.openCheckoutModal({
                title: 'Purchase dataset',
                description: dataset.title + ' $'+dataset.cost,
                type: 'dataset',
                id: dataset._id
            }, function(err, result){
                if (err){
                    $log.error(err);
                    toastr.error('Error purchasing dataset.');
                }
                else{
                    dataset.purchased = true;
                    toastr.success('Dataset purchased successfully and it has been copied to your page.');
                }
            });
        };

        vm.state = $state.current.name;
        
        if (vm.state === 'datasets.filter') {
            vm.filterData($stateParams.field, $stateParams.value);
        }

        else if (vm.state === 'users.profilepage.datasets') {
            vm.load();
            Datasets.user($stateParams.username).then(function (res) {
                vm.list = res.data;
                vm.loaded();
            }, function (err) {
                vm.loaded();
            });
        }

        vm.search = function () {
            if (vm.state !== 'lab.process2.step3'){
                if (vm.q && vm.q !== ''){
                    $state.go('datasets.search', { search : vm.q });
                }
                else{
                    toastr.error('You need to enter a word or phrases to search by.');
                }
            }
            else{
                vm.itemsPerPage = 10;
                loadSearchData();
            }
        };

        vm.showTitle = function (title) {
            var q = vm.q,
                matcher = new RegExp(q, 'gi');
            var highlightedTitle = title.replace(matcher, '<span class="matched">$&</span>');
            // console.log(highlightedTitle);
            return $sce.trustAsHtml(highlightedTitle);
        };

        vm.addToUser = function (dataset) {
            Datasets.showTitleModal(dataset.title + ' - ' + moment().format('MM/DD/YYYY, h:mm:ss a'), dataset, function(result) {
                dataset.title = result.title;
                Datasets.addToUserApiCall(dataset)
                    .then(function (data) {
                        toastr.success('Dataset copied to your page.');
                    })
                    .catch(function (err) {
                        $log.error(err);
                        toastr.error('An error occurred while copying the dataset.');
                    });
            });
        };

        vm.viewDataset = function(dataset){
            if (vm.state !== 'users.profilepage.datasets'){
                if (dataset.access == 'for sale' && !dataset.purchased){
                    return;
                }
            }

            if (vm.state !== 'lab.process2.step3') {
                $state.go('datasets.detail', {datasetId: dataset._id});
            }
            else{
                vm.useDataset(dataset);
            }
        };

        vm.showData = function (dataset) {
            var modalInstance = $modal.open({
                templateUrl: 'modules/datasets/client/detail/datasets.detail.modal.html',
                controller: 'DatasetsDetailModalController',
                controllerAs: 'DatasetDetailModal',
                size: 'md',
                resolve: {
                    viewingDataset: dataset
                }
            });
        };

        vm.useDataset = function(dataset){
            $rootScope.$emit('useDataset', dataset);
        };
}]);
