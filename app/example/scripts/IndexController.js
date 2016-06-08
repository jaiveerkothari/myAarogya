angular
  .module('example')
  .controller('IndexController', function($scope, supersonic) {
    
    Parse.initialize("HxZKObXH6PGYX3yR0KXj1gCDHc5ON3oYWwcJXql9", "s6JNCHywzyV77o081q4qaV0reQTp0T9pKXtjKYV1");
    var searchHistory = Parse.Object.extend("searchHistory");
    
    $scope.navbarTitle = "Settings";
    $scope.searchList = function(){
	var newSearch = new searchHistory();
        newSearch.set("search", $scope.searchThing);
	newSearch.save();
	
	var view = new supersonic.ui.View("example#search");
	supersonic.ui.layers.push(view);
    };
    $scope.searchMap = function(){
        var newSearch = new searchHistory();
        newSearch.set("search", $scope.searchThing);
	newSearch.save();
	var view = new supersonic.ui.View("https://www.google.com/maps/search/" + $scope.searchThing + "/@" + "42"+ ","+"-87"+",14z/data=!3m1!4b1");
	supersonic.ui.layers.push(view);
        
    };
 });
