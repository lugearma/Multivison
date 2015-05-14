angular.module('app').factory('mvAuth', function ($http, mvIdentity, $q, mvUser) {
        
	return{
        
        //Authentica
        authenticateUser: function (username, password) {

            var dfd = $q.defer();

            $http.post('/login', { username: username, password: password }).then(function(response){
                if(response.data.success){
                    user = new mvUser();
                    angular.extend(user, response.data.user);
                    mvIdentity.currentUser = user;
                    dfd.resolve(true);
                } else {
                    dfd.resolve(false);
                }
            });
            return dfd.promise;
        },

        //Sign Up
        createUser: function (newUserData){
            var newUser = new mvUser(newUserData);
            var dfd = $q.defer()
            
            newUser.$save().then(function (){
                mvIdentity.currentUser = newUser;
                dfd.resolve();
            }, function (){
                dfd.reject(response.data.reason);
            });

            return dfd.promise;
        },
        
        //Logout
        logoutUser: function () {
            var dfd = $q.defer();
            $http.post('/logout', { logout: true }).then(function (){
                mvIdentity.currentUser = undefined;
                dfd.resolve; 
            });
            return dfd.promise;
        },

        //If the current user is admin or not
        authorizeCurrentUserForRoute: function (role) {
            if(mvIdentity.isAuthorized(role))
                return true;
            return $q.reject('not authorized');
        }
	};
});