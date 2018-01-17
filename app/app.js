'use strict';

angular.module('musicBrowsing', [
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!'); //default value

  $routeProvider.when('/browse', 
  {
    templateUrl: 'views/browse.html'
  })
  .when('/filter',
  {
    templateUrl: 'views/filter.html'
  })
  .otherwise({redirectTo: '/browse'});
}]).
filter('secondsToTime', ['$filter', function($filter) { //Convert seconds to m:ss
  return function(seconds) {
    return $filter('date')(new Date(0, 0, 0).setSeconds(seconds), 'm:ss');
  };
}])