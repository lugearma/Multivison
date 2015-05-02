angular.module('app').factory('mvIdentity', function () {
	return{
		currentUser: undefined,
		isAuthenticated: function () {
            console.log("Esto de del current user: " + this.currentUser);
			return !!this.currentUser;
		}
	};
});