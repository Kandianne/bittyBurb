(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	function HomeController($location, $scope) {
		var vm = this;
		vm.title = 'Bittyburb';

		$scope.isCurrentPath = function (path) {
			console.log("we getting here");
			return $location.path() == path;
		};
	}
})();
