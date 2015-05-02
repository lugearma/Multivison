angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvNotifier, mvIdentity, mvAuth){
    
    $scope.indentity = mvIdentity;

    $scope.signin = function(username, password){

        mvAuth.authenticateUser(username, password).then(function (success) {
            if(success){
                mvNotifier.notify('You are signed in');
            }else{
                mvNotifier.notify('Password/Username incorrect, please try again');
            }
        });
        
    };
    
});