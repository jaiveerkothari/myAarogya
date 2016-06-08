angular
  .module('example')
  .controller('FoodSettingsController', function($scope, supersonic) {
    Parse.initialize("HxZKObXH6PGYX3yR0KXj1gCDHc5ON3oYWwcJXql9", "s6JNCHywzyV77o081q4qaV0reQTp0T9pKXtjKYV1");
    supersonic.logger.log("we are in FoodSettingsController");
    $scope.master = {};
    
    $scope.buttonStyle="button-calm";

    $scope.veg=false;
    $scope.nonveg=false;
    $scope.seafood=false;

    $scope.myDiets = [{
        name:'veg', value:false
    }, {
        name:'nonveg', value:false
    }, {
        name:'seafood', value:false
    }];

    $scope.mycuisines = [{
        name: "Home-Cooked",
        value: false
    }, {
        name: "Andhra",
        value: false
    }, {
        name: "Chinese",
        value: false
    }, {
        name: "Pizza",
        value: false
    }, {
        name: "Burger",
        value: false
    }, {
        name: "Dosa",
        value: false
    }];
    $scope.updateSettings = function() {

        
        var Cuisine = Parse.Object.extend("Cuisine");
        var Diet = Parse.Object.extend("Diet");


        var list1 = [ $scope.veg, $scope.nonveg, $scope.seafood];

        

        for (i =0; i <list1.length; i++){

            if(list1[i]){
                var newDiet = new Diet();
                if (i==0){
                    var txt="veg";
                }else if(i==1){
                    var txt="nonveg";
                }
                else if(i==2){
                    var txt="seafood";
                }

                newDiet.set("cuisineName",txt);
                newDiet.set("user",Parse.User.current());
                newDiet.save(null, {
                success: function(newDiet) {
                // Execute any logic that should take place after the object is saved.
                
                },
                error: function(newDiet, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                
                }
                });
            }
        }
        for (j=0; j< $scope.mycuisines.length;j++){

            if($scope.mycuisines[j].value==true){
                var newCuisine= new Cuisine();
                supersonic.logger.log("hey there");

                newCuisine.set("cuisineName",$scope.mycuisines[j].name);
                newCuisine.set("user",Parse.User.current());
                newCuisine.save(null, {
                success: function(newDiet) {
                // Execute any logic that should take place after the object is saved.
                
                },
                error: function(newDiet, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                
                }
                });
            }
        }

        supersonic.ui.layers.pop();


    };

    $scope.saveItem = function(){
        var Cuisine = Parse.Object.extend("Cuisine");
        var Diet = Parse.Object.extend("Diet");


    }

    
    
    
 });
