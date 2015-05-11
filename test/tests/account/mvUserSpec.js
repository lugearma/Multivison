describe('mvUser', function (){
	beforeEach(module('app'));

	describe('isAdmin', function (){
		it('should be return false if the roles array don have an admin', inject(function (mvUser){
			var user = new mvUser();
			user.roles = ['not admin'];
			expect(user.isAdmin()).to.be.falsey;
		}));

		it('should be return trure if the roles array has an admin', inject(function (mvUser){
			var user = new mvUser();
			user.roles = ['admin'];
			expect(user.isAdmin()).to.be.true;
		}));
	});
});