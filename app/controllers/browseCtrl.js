angular.module('musicBrowsing').controller('browseCtrl', ['$scope', 'musicItemsService', function($scope, musicItemsService) {
    $scope.musicItems = [];
    $scope.loading = true;
    $scope.sortOrder = "";

    musicItemsService.getItems(function(items) {
        $scope.musicItems = items;
        $scope.loading = false;
    });
}]);