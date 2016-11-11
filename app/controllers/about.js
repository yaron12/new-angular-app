(function() {
	var app = angular.module("app");
	app.controller("about",about)
	
		function about($scope) {
	$scope.title = "about";
	}
})(); 