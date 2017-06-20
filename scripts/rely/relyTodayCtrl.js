
//今日一刻控制器
angular.module('rely')
	.controller('TodayCtrl',['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
		//加载状态
		$rootScope.loaded = false;

		//标题
		$rootScope.title = "今日一刻";

		//导航索引
		$rootScope.key = 0;

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