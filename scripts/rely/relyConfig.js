
//配置路由
angular.module('rely')
	.config(['$routeProvider',function ($routeProvider) {
		$routeProvider.when('/today', {
			templateUrl : './views/today.html',
			controller: 'TodayCtrl'
		}).when('/older', {
			templateUrl : './views/older.html',
			controller: 'OlderCtrl'
		}).when('/author', {
			templateUrl : './views/author.html'
		}).when('/category', {
			templateUrl : './views/category.html'
		}).when('/favourite', {
			templateUrl : './views/favourite.html'
		}).when('/settings', {
			templateUrl : './views/settings.html'
		}).otherwise({
			redirectTo: 'today'
		})
	}])