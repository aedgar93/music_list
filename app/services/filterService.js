/**
 * Stores the filter options and selected filter. I use a service so the information can be shared across pages.
 */
angular.module('musicBrowsing').factory('filterService', [function() {
    var filters = [
        {key: 'createdAt', reverse: false, displayText: 'Newest'},
        {key: 'difficultyId', reverse: false, displayText: 'Easiest'},
        {key: 'difficultyId', reverse: true, displayText: 'Hardest'}];
    var currentFilter = filters[0];
    return {
        getCurrentFilter: function() {
             return currentFilter;
        },
        getFilters: function() {
            return filters;
        },
        updateFilter: function(filter) {
            currentFilter = filter;
        }
    }
}]);