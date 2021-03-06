angular.module('app', ['ngResource', 'ngRoute']);

var routeRoleCheck = {
	admin: {
		auth: function (mvAuth) {
			return mvAuth.authorizeCurrentUserForRoute('admin');
		}
	}
}

angular.module('app').config(function ($routeProvider, $locationProvider){
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	
	$routeProvider
		.when('/', {
			templateUrl: '/partials/main/main',
			controller: 'mvMainCtrl'
		})
		.when('/admin/users', {
			templateUrl: '/partials/admin/user-list',
			controller: 'mvUserListCtrl',
			resolve: routeRoleCheck.admin
		})
		.when('/signup', {
			templateUrl: '/partials/account/signup',
			controller: 'mvSignupCtrl'
		})
});

angular.module('app').run(function ($rootScope, $location) {
	$rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
		if(rejection === 'not authorized'){
			$location.path('/');
		}
	});
});