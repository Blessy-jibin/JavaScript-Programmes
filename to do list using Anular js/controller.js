var app = angular.module('myApp', []);

app.controller("myCtrl", function($scope) {

	$scope.todolist=[];
	 
   $scope.AddContacts=function(){
   add=1;
   $scope.listitem=" ";
   console.log("add="+add);

   }

    $scope.sve=function(){
      if(add==1){
        $scope.todolist.push($scope.listitem);
        console.log($scope.todolist);
        
      }
     else{
     	
    	$scope.todolist[index]=$scope.listitem;
     	
     }
	}


$scope.update=function(item){
 add=0;
console.log(item);
$scope.listitem=item;
index = $scope.todolist.indexOf(item);
console.log("add=" + add);
}

});