angular.module('app').controller('mvSignupCtrl', function ($scope, $location, mvAuth, mvNotifier, mvUser){
	
	$scope.signup = function () {
		var newUserData = {
			username: $scope.email,
			password: $scope.password,
			firstName: $scope.fname,
			lastName: $scope.lname
		}

		mvAuth.createUser(newUserData).then(function (){
			mvNotifier.notify.success('User account created');
			$location.path('/');
		}, function (){
			mvNotifier.notify.error(reason);
		});
	}
});