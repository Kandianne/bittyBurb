(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	function HomeController($location, $scope) {
		var vm = this;
		vm.title = 'Bittyburb';

		$scope.isCurrentPath = function (path) {
			return $location.path() == path;
		};
	}
})();
