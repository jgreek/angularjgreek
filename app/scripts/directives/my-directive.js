'use strict';
var app = angular.module('stockDogApp', []);
app.directive('myDirective', function($location, WatchlistService) { 
	if (WatchlistService) { 
		WatchlistService.query()

	}
	return {
      templateUrl: 'views/templates/watchlist-panel.html'
  };
});