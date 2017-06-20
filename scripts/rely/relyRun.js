
//定义根作用域
angular.module('rely')
	.run(['$rootScope', function ($rootScope) {
		//菜单栏滑入滑出，类名切换
		$rootScope.collapsed = false;
		// //初始加载标记
		// $rootScope.loaded = false;

		// //标题
		// $rootScope.title = "今日一刻";

		// //导航索引
		// $rootScope.key = 0;

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