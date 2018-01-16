/**
 * Get all of the music items (right now this is just songs, some day it could be albums too).
 * We are loading the JSON from a file. I am using a service to contain the logic so someday we could get the
 * items from an API and we wouldn't have to update the controllers.
 */
angular.module('musicBrowsing').factory('musicItemsService', ['$http', function($http) {
    return {
        /**
         * Gets all music items.
         * @param success callback function to run on success
         * @param error callback
         */
        getItems: function(success, error) {
            $http.get('/assets/songData.json').then(function(result) {
                //TODO: add some checks on result
                success(result.data)
            }, error);    
        }
    }
}]);