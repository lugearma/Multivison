angular.module('app').controller('mvMainCtrl', function ($scope){
	$scope.courses = [
		{name: 'C# for developers', featured: true, publiched: new Date('1/3/2013')},
		{name: 'C# with xamarin', featured: true, publiched: new Date('1/5/2013')},
		{name: 'javascript Cookbook', featured: true, publiched: new Date('1/10/2013')},
		{name: 'Android for begginers', featured: false, publiched: new Date('1/3/2012')},
		{name: 'Arduino for girls', featured: true, publiched: new Date('3/3/2013')},
		{name: 'this is my ass', featured: false, publiched: new Date('1/12/2013')},
		{name: 'SEO markting technics', featured: true, publiched: new Date('5/3/2013')},
		{name: 'No me digas que te vas', featured: false, publiched: new Date('6/11/2013')},
		{name: 'CSS para developers', featured: true, publiched: new Date('9/3/2013')},
		{name: 'HTML5 para developers', featured: false, publiched: new Date('9/3/2013')},
		{name: 'Android primeros pasos', featured: true, publiched: new Date('9/3/2013')},
		{name: 'Solo me quedas tu, cuadrupedo', featured: true, publiched: new Date('9/3/2013')},
		{name: 'Mono touch: one aproach', featured: false, publiched: new Date('1/7/2013')}
	]
});