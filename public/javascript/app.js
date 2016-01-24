(function() {
	'use strict';
	angular.module('app', ['ui.router', 'ngMaterial'])
	.config(Config);

	function Config($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) {
		$stateProvider.state('Home',{
			url: '/home',
			templateUrl: '/templates/home.html'
		}).state('About', {
			url: '/about',
			templateUrl: '/templates/about.html'
		}).state('Contact', {
			url: '/contact',
			templateUrl: '/templates/contact.html'
		}).state('Blog', {
			url: '/blog',
			templateUrl: '/templates/blog.html'
		});
		$urlRouterProvider.otherwise('/home');
		$urlMatcherFactoryProvider.caseInsensitive(true);
		$urlMatcherFactoryProvider.strictMode(false);
		$locationProvider.html5Mode(true);
	}
})();
