angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvNotifier, mvIdentity, mvAuth, $location){

    $scope.identity = mvIdentity;

    $scope.signin = function(username, password){
        mvAuth.authenticateUser(username, password).then(function (success) {
            if(success){
                mvNotifier.notify('You are signed in'); 
            }else{
                mvNotifier.notify('Password/Username incorrect, please try again');
            }
        });
        
    };
   
   $scope.signOut = function () {
       mvAuth.logoutUser().then(function () {
            $scope.username = "";
            $scope.password = "";
            mvNotifier.notify('User is signed out');
            $location.path('/');  
       });
   };
});