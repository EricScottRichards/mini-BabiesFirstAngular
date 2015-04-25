var app = angular.module('friendsList');
app.controller('mainCtrl', function($scope){

	$scope.friends = ['Fumiko', 'Olive', 'Ben', 'Adam', 'Carbon'];

	$scope.clicker = function() {
		$scope.friends.push($scope.newThing);
		$scope.newThing = "";
	}

});