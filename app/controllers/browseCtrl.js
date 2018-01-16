angular.module('musicBrowsing').controller('browseCtrl', 
['$scope', 'musicItemsService', 'filterService', function($scope, musicItemsService, filterService) {
    $scope.musicItems = [];
    $scope.loading = true;
    $scope.currentFilter = filterService.getCurrentFilter();

    musicItemsService.getItems(function(items) {
        $scope.musicItems = items;
        $scope.loading = false;
    });
}]);