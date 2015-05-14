angular.module('app').controller('mvSignupCtrl', function ($scope, $location, mvAuth, mvNotifier, mvUser){
	
	$scope.signup = function () {
		var newUserData = {
			userName: $scope.email,
			firstName: $scope.fname,
			lastName: $scope.lname,
			password: $scope.password
		}

		mvAuth.createUser(newUserData).then(function (){
			mvNotifier.notify.success('User account created');
			$location.path('/');
		}, function (reason){
			mvNotifier.notify.error(reason);
		});
	}
});