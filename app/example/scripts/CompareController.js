angular
  .module('example')
  .controller('CompareController', function($scope, supersonic) {

    $scope.navbarTitle = "Compare trends";
    $scope.submitTrends = function(){
    	var View = new supersonic.ui.View("https://www.google.com/trends/explore#q=" +$scope.firstThing + "%2C%20" + $scope.secondThing + "&cmpt=q&tz=");
	supersonic.ui.layers.push(View);
    };

  });
