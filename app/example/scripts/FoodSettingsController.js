angular
  .module('example')
  .controller('FoodSettingsController', function($scope, supersonic) {
    //Parse.initialize("9ZMoGrZm9iXcoZVZzrt3yh7AJG9GpzbvrD8JDiCz", "pKhmjvhc6hWm7FmsrNjKEvbEac1446gDvNaCEO3k");
    Parse.initialize("HxZKObXH6PGYX3yR0KXj1gCDHc5ON3oYWwcJXql9", "s6JNCHywzyV77o081q4qaV0reQTp0T9pKXtjKYV1");
    supersonic.logger.log("we are in FoodSettingsController");
    $scope.master = {};
    // $scope.user1={mood:"happy"};
    // $scope.ufood="yo";
    // $scope.uex="yo";
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

        //$scope.buttonStyle="button-balanced";
        var Cuisine = Parse.Object.extend("Cuisine");
        var Diet = Parse.Object.extend("Diet");


        
        supersonic.logger.log("YO WE IN HERE");
        // supersonic.logger.log($scope.veg);
        // supersonic.logger.log($scope.nonveg);
        // supersonic.logger.log($scope.seafood);

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




        // if($scope.veg){
        //     supersonic.logger.log("veg selected");

        //     var newDiet = new Diet();
        //     newDiet.set("cuisineName","veg");
        //     newDiet.set("user",Parse.User.current());
        //     newDiet.save(null, {
        //   success: function(newDiet) {
        //     // Execute any logic that should take place after the object is saved.
        //     supersonic.logger.log("food saved");
        //   },
        //   error: function(newDiet, error) {
        //     // Execute any logic that should take place if the save fails.
        //     // error is a Parse.Error with an error code and message.
        //     supersonic.logger.log("food NOT saved");
        //   }
        // });
        // };
              

        // if($scope.nonveg){
        //     supersonic.logger.log("nonveg selected");

        //     var newDiet2 = new Diet();
        //     newDiet2.set("cuisineName","nonveg");
        //     newDiet2.set("user",Parse.User.current());
        //     newDiet2.save(null, {
        //   success: function(newDiet) {
        //     // Execute any logic that should take place after the object is saved.
        //     supersonic.logger.log("food saved");
        //   },
        //   error: function(newDiet, error) {
        //     // Execute any logic that should take place if the save fails.
        //     // error is a Parse.Error with an error code and message.
        //     supersonic.logger.log("food NOT saved");
        //   }
        // });
        // };      

        // if($scope.seafood){
        //     supersonic.logger.log("seafood selected");

        //     var newDiet3 = new Diet();
        //     newDiet3.set("cuisineName","seafood");
        //     newDiet3.set("user",Parse.User.current());
        //     nnewDiet3.save(null, {
        //   success: function(newDiet) {
        //     // Execute any logic that should take place after the object is saved.
        //     supersonic.logger.log("food saved");
        //   },
        //   error: function(newDiet, error) {
        //     // Execute any logic that should take place if the save fails.
        //     // error is a Parse.Error with an error code and message.
        //     supersonic.logger.log("food NOT saved");
        //   }
        // });
        // };      

        
        supersonic.logger.log("YO");
        supersonic.ui.dialog.alert("Updated successfully");
        supersonic.ui.layers.pop();


    };

    $scope.saveItem = function(){
        var Cuisine = Parse.Object.extend("Cuisine");
        var Diet = Parse.Object.extend("Diet");


    }

    
    
    
 });
