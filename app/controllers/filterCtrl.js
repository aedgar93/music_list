/**
 * A controller for the filter page logic. An entire page is a little over kill, if I did it again
 * I might just make the filter selector a drop down on the browse page.
 */
angular.module('musicBrowsing').controller('filterCtrl', 
['$scope', 'filterService', '$location', function($scope, filterService, $location) {
    $scope.currentFilter = filterService.getCurrentFilter();
    $scope.filters = filterService.getFilters();
    $scope.updateFilter = function(filter) {
        filterService.updateFilter(filter);
        //go back to browse
        $location.path('/browse');
    };

    $scope.isSelected = function(filter) {
        return filter == $scope.currentFilter;
    }

    $scope.close = function() {
        $location.path('/browse');
    }
}]);