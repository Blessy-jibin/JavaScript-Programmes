var app = angular.module('myApp', []);

app.controller("myCtrl", function($scope) {

	$scope.todolist=[];
	 


    $scope.sve=function(){
    $scope.todolist.push($scope.listitem);
    
    console.log($scope.todolist);
    
	}


});