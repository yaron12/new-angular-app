(function() {
	var app = angular.module("app");
	app.controller("main", main)

	function main($scope, $http) {
		$scope.title = "main";

		$scope.getData = function() {
			var url = 'http://www.json-generator.com/api/json/get/cmbpevlysy?indent=2';
			var promise = $http.get(url);
			promise.then(success, error);

			function success(response) {
				$scope.data = response.data;
				console.log(response.data);
			};

			function error(response) {
				$scope.data = response.data;
			};
		};
	};
})();

