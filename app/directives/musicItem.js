angular.module('musicBrowsing').directive('musicItem', [function() {
    return {
        templateUrl: 'views/musicItem.html',
        restrict: 'E',
        scope: {
            info: '=info'
        }
    }
}]);