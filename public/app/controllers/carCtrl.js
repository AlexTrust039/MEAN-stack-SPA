angular.module("carController", [])

.controller('addCtr', function($http, $location, $timeout){

	var app = this;

	this.addCar = function(Data){
		console.log('Working');

		//$http - сервис для запросов на сервер:
		//отправляем данные формы которые содержатся в Data
		//получаем ответ который содержится в data
		$http.post('/catalog/auto', this.Data).then(function(data){
				if (data.data.success) {
					app.message = data.data.message;

					//$timeout сервис для установки задержки
					$timeout(function(){
						//$location сервис для перенеправления на страницу
						$location.path('/');
					}, 1500);
					
				} else {
					app.message = data.data.message;
				}
		});
	};
});



