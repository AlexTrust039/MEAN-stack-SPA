
angular.module("catalogController", [])

.controller('showCtrl', function($http, $scope){

// var x = this;


	$http.get('/catalog/get').then(function(data){
		console.log(data);
		// x.list = data.data;
		$scope.list = data.data;
	});

});


