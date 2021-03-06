'use strict';

/* global moment */

//posts Detail Controller
angular.module('posts')
    .controller('postsDetailController', ['$stateParams', 'Authentication', 'posts', '$state', '$log', 'Datasets', '$modal', 'toastr', 'prompt', 'ModelsService', 'BillingService',
            function ($stateParams, Authentication, posts, $state, $log, Datasets, $modal, toastr, prompt, ModelsService, BillingService) {

            var vm = this;

            vm.tabs = [];

            vm.activeTab = '';

            vm.notfound = false;

            vm.authentication = Authentication;

            posts.crud.get({
                postId: $stateParams.postId
            }).$promise.then(function (response) {
                vm.post = response;
                if (vm.post.datasets.length){
                    vm.tabs.push('Datasets');
                    vm.activeTab = vm.activeTab === '' ? 'Datasets' : vm.activeTab;
                }
                if (vm.post.models.length){
                    vm.tabs.push('Models');
                    vm.activeTab = vm.activeTab === '' ? 'Models' : vm.activeTab;
                }
                if (vm.post.files.length){
                    vm.tabs.push('Files');
                    vm.activeTab = vm.activeTab === '' ? 'Files' : vm.activeTab;
                }
            }, function (err) {
                $log.error(err);
                vm.notfound = true;
            });

            // This is a silent event
            posts.trackpostview($stateParams.postId)
                .then()
                .catch(function (error) {
                    $log.error(error);
                });

            vm.changeTab = function(tab){
                vm.activeTab = tab;
            };

            vm.addToUser = function (dataset) {
                Datasets.showTitleModal(dataset.title + ' - ' + moment().format('MM/DD/YYYY, h:mm:ss a'), dataset, function(result) {
                    dataset.title = result.title;
                    Datasets.addToUserApiCall(dataset)
                        .then(function (data) {
                            toastr.success('Added dataset to your lab.');
                        })
                        .catch(function (error) {
                            $log.error(error);
                            toastr.error('An error occurred while adding dataset to your lab.');
                        });
                });
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

            vm.purchaseDataset = function(dataset){
              BillingService.openCheckoutModal({
                title: 'Purchase dataset',
                description:dataset.title + ' $'+dataset.cost,
                type:'dataset',
                id:dataset._id
              }, function(err, result){
                if (err){
                	$log.error(err);
                	toastr.error('Error purchasing dataset.');
                }
                else{
                	dataset.purchased = true;
                    toastr.success('Dataset purchased successfully and it has been copied to your LAB.');
                }
              });
            };

            vm.purchaseModel = function(model){
                BillingService.openCheckoutModal({
                    title: 'Purchase model',
                    description: model.title + ' $'+ model.cost,
                    type: 'model',
                    id: model._id
                }, function(err, result){
                    if (err){
                        $log.error(err);
                        toastr.error('Error purchasing model.');
                    }
                    else{
                        model.purchased = true;
                        toastr.success('Model purchased successfully and it has been copied to your page.');
                    }
                });
            };

            vm.remove = function(){
                posts.crud.remove({
                    postId: $stateParams.postId
                }).$promise.then(function (response) {
                        $state.go('users.profilepage.posts', {
                            username: vm.authentication.user.username
                        });
                        toastr.success('Post deleted successfully.');
                    }, function (err) {
                        vm.error = err.message;
                        toastr.error('Error deleting post.');
                    });
            };

            vm.copyModel = function(model){
                ModelsService.showTitleModal(model.title + ' - ' + moment().format('MM/DD/YYYY, h:mm:ss a'), model, function(result) {
                    model.title = result.title;
                    ModelsService.addToUserApiCall(model)
                        .then(function (data) {
                            toastr.success('Model copied to your page.');
                        })
                        .catch(function (err) {
                            $log.error(err);
                            toastr.error('An error occurred while copying the model.');
                        });
                })
                    .catch(function (err) {
                        $log.error(err);
                        toastr.error('An error occurred while copying the dataset for the model.');
                    });
            };


 }]);
