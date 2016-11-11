/*(function() {
 var app = angular.module("app").config(route);

 function route($routeProvider) {
 $routeProvider
 .when('/about', {
 templateUrl : 'app/views/about.html',
 controller : "about"

 }).when('/main', {
 templateUrl : 'app/views/main.html',
 controller : "main"
 })
 }

 })();
 */
(function() {
	angular.module("app").config(route);

	function route($routeProvider) {
		$routeProvider
		.when('/about', {
			templateUrl : 'app/views/about.html'

		}).when('/main', {
			templateUrl : 'app/views/main.html'

		}).otherwise({
			redirectTo : '/'
		});

	}

})();
