//创建模板
var Yike = angular.module('Yike',['ngRoute']);

//配置路由
Yike.config(['$routeProvider',function ($routeProvider) {
	$routeProvider.when('/today', {
		templateUrl : './views/today.html',
		controller: 'TodayCtrl'
	}).when('/older', {
		templateUrl : './views/older.html'
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

//定义根作用域
Yike.run(['$rootScope', function ($rootScope) {
	//菜单栏滑入滑出，类名切换
	$rootScope.collapsed = false;
	//初始加载标记
	$rootScope.loaded = false;

	//菜单栏滑入滑出
	$rootScope.toggle = function () {
		$rootScope.collapsed = !$rootScope.collapsed;

		//实现滑入功能
		var navs = document.querySelectorAll('.navs dd');
		if ($rootScope.collapsed) {
			for ( var i = 0 ; i < navs.length; i++ ) {
				navs[i].style.transform = 'translate(0)';
				navs[i].style.transitionDuration = (i + 1) * 0.15 + 's';
				navs[i].style.transitionDelay = '0.2s';
			}
		} else {
			for ( var i = 0 ; i < navs.length; i++ ) {
				navs[i].style.transform = 'translate(-100%)';
				navs[i].style.transitionDuration = (navs.length - i - 1) * 0.15 + 's';
				navs[i].style.transitionDelay = '0s';
			}
		}
	}
}]);

//菜单栏控制器
Yike.controller('NavsCtrl',['$scope', function ($scope) {
	$scope.navs = [
		{text: '今日一刻', link:'#!/list', icon: 'icon-home'},
		{text: '往期内容', link:'#!/older', icon: 'icon-file-empty'},
		{text: '热门作者', link:'#!/author', icon: 'icon-pencil'},
		{text: '栏目浏览', link:'#!/category', icon: 'icon-menu'},
		{text: '我的喜欢', link:'#!/favourite', icon: 'icon-heart'},
		{text: '设置', link:'#!/settings', icon: 'icon-cog'}
	]
}]);

//今日热点控制器
Yike.controller('TodayCtrl',['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
	$http({
		url: './api/today.php',
		method: 'get'
	}).then(function (res) {
		console.log(res.data);
		//接收返回来的值
		$scope.posts = res.data.posts;
		$scope.date = res.data.date;

		//加载出来后的标记
		$rootScope.loaded = true;
	})
}])
