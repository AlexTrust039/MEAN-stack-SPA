angular.module("appRoutes", ["ngRoute"])

.config(function($routeProvider, $locationProvider){
	
	//Сервис для маршрутизации
	$routeProvider

	.when('/', {
		templateUrl: "app/views/pages/main.html"
	})
	
	.when('/about', {
		templateUrl: "app/views/pages/about.html"
	})

	.when('/add', {
		templateUrl: "app/views/pages/add.html",
		controller: "addCtr",
		controllerAs: "add"
	})

	.when('/catalog', {
		templateUrl: "app/views/pages/catalog.html",
		controller: "showCtrl",
		// controllerAs: "show"
	})

	//Перенаправление на главную страницу
	.otherwise({
        redirectTo: '/'
    });

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
});
