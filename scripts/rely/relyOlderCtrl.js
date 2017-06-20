
//往期内容
angular.module('rely')
	.controller('OlderCtrl', ['$scope', '$rootScope', '$http' ,function ($scope, $rootScope, $http) {
		//加载状态
		$rootScope.loaded = false;

		//标题
		$rootScope.title = "往期内容";

		//导航索引
		$rootScope.key = 1;

		$http({
			url: './api/older.php',
			method: 'get',
			params: {day: -2}
		}).then(function (res) {
			//接收返回的数据
			$scope.posts = res.data.posts;
			$scope.date = res.data.date;

			//加载出来后的标记
			$rootScope.loaded = true;
		})

	}]);