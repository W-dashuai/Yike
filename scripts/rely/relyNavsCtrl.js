
//菜单栏控制器
angular.module('rely')
	.controller('NavsCtrl',['$scope', function ($scope) {
		$scope.navs = [
			{text: '今日一刻', link:'#!/list', icon: 'icon-home'},
			{text: '往期内容', link:'#!/older', icon: 'icon-file-empty'},
			{text: '热门作者', link:'#!/author', icon: 'icon-pencil'},
			{text: '栏目浏览', link:'#!/category', icon: 'icon-menu'},
			{text: '我的喜欢', link:'#!/favourite', icon: 'icon-heart'},
			{text: '设置', link:'#!/settings', icon: 'icon-cog'}
		]
	}]);