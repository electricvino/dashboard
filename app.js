(function () {
var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl:'partials/home.html'
            })
            .when("/about", {
                templateUrl:'partials\about.html'
            })
            .when("/resume", {
				templateUrl:'./partials/resume.html'
			})
			.otherwise({
                redirectTo:'/'
            });
})();