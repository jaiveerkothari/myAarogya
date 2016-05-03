angular
  .module('example')
  .controller('SymptomsController', function($scope, supersonic) {
    //Parse.initialize("9ZMoGrZm9iXcoZVZzrt3yh7AJG9GpzbvrD8JDiCz", "pKhmjvhc6hWm7FmsrNjKEvbEac1446gDvNaCEO3k");
    Parse.initialize("HxZKObXH6PGYX3yR0KXj1gCDHc5ON3oYWwcJXql9", "s6JNCHywzyV77o081q4qaV0reQTp0T9pKXtjKYV1");
    var searchHistory = Parse.Object.extend("Symptoms");
    //Parse.GeoPoint.current({
	//	success: function (point) {
	//		$scope.myLocation = point;
	//	}
    //});
    
    $scope.findDisease = function(){
	var newSearch = new searchHistory();
        newSearch.set("search", $scope.searchThing);
	newSearch.save();
	//window.location.assign("https://www.google.com/#q=" + $scope.searchThing);
        //var view = new supersonic.ui.View("https://www.google.com/#q=" + $scope.searchThing);
	var view = new supersonic.ui.View("example#search");
	supersonic.ui.layers.push(view);
    };
    $scope.searchMap = function(){
        var newSearch = new searchHistory();
        newSearch.set("search", $scope.searchThing);
	newSearch.save();
	var view = new supersonic.ui.View("https://www.google.com/maps/search/" + $scope.searchThing + "/@" + "42"+ ","+"-87"+",14z/data=!3m1!4b1");
	supersonic.ui.layers.push(view);
        //window.location.assign("https://www.google.com/maps/search/" + $scope.searchThing + "/@"
	//+ "42" +"," 
	//+ "-87" + ",14z/data=!3m1!4b1");
    };
 });
