angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http){
    $scope.signin = function(username, password){
        $http.post('/login', { username: username, password: password }).then(function(res){
          if(res.data.success){
              console.log('loged in');
          } else {
              console.log('Fallo el log: ' + res.data.success);
          }
        })
    }
});