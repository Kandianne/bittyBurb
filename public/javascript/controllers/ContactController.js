(function() {
	'use strict';
	angular.module('app')
	.controller('ContactController', ContactController);

	function ContactController($mdToast, $animate, $http, $scope) {
		var vm = this;

	//===================TOAST POSITIONING===============================================	
		$scope.toastPosition = {
			bottom: true,
			top: false,
			left: false,
			right: true
		};
		$scope.getToastPosition = function () {
			return Object.keys($scope.toastPosition)
			.filter(function (pos) {
				return $scope.toastPosition[pos];
			})
			.join(' ');
		};

	//===================SEND MAIL FUNCTIONALITY===============================================	

		vm.sendMail = function() {

			var data = ({
				contactName : vm.contactName,
				contactEmail : vm.contactEmail,
				contactMessage : vm.contactMessage
			});

			console.log(data);
			$http.post("/api/contact-form", data).success(function(data, status, headers, config) {
				$mdToast.show(
					$mdToast.simple()
					.content('Thanks for your message! We\'ll get back to you very soon!')
					.position($scope.getToastPosition())
					.hideDelay(5000)
					);
				
			})
			.error(function(data, status, headers, config) {
					console.log(status);
					console.log(data);
                    // called asynchronously if error occurs
                    // or server returns response with an error status.
                });

			data = null;

			vm.contactEmail = "";
			vm.contactName = "";
			vm.contactMessage = "";

		}
		
	}
})();