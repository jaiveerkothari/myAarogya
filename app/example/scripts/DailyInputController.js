angular
  .module('example')
  .controller('DailyInputController', function($scope, supersonic) {
    //Parse.initialize("9ZMoGrZm9iXcoZVZzrt3yh7AJG9GpzbvrD8JDiCz", "pKhmjvhc6hWm7FmsrNjKEvbEac1446gDvNaCEO3k");
    Parse.initialize("HxZKObXH6PGYX3yR0KXj1gCDHc5ON3oYWwcJXql9", "s6JNCHywzyV77o081q4qaV0reQTp0T9pKXtjKYV1");
    supersonic.logger.log("we are in DailyInputController");
    $scope.master = {};
    

    $scope.ideas=[{title: "Accommodation", id: 0},
    {title: "Adventure sports", id: 1},
    {title: "Street Foods", id: 31},
    {title: "Supper", id: 32},
    {title: "Tours", id: 33},
    {title: "Wineries", id: 34},
    {title: "Zoo", id: 35}
     ];

    $scope.foodOptions =[];

    $scope.selected = $scope.ideas[0];
    $scope.ufood=null;

    supersonic.ui.views.current.whenVisible(function() {

        supersonic.logger.log("View is whenVisible");
        console.log("CS: View is visible")
        var FoodOptions = Parse.Object.extend("FoodOptions");
        var query = new  Parse.Query("FoodOptions");
        query.find({
            success: function(results){

                for (var k = 0; k < results.length;k++){

                    var temp = results[k];
                    supersonic.logger.log(temp.get('foodName'));
                    var tempName = temp.get('foodName');
                    var tempId = k + 2;
                    $scope.foodOptions.push({title:tempName , id:tempId});
                    console.log($scope.foodOptions);
                }
                $scope.$apply();
                    
                  
            },
            error: function(err){
            }
        }); 



    });

    $scope.submit = function() {

        

        
        supersonic.logger.log("entered submit");

       // $scope.master = angular.copy(user);

        var Food = Parse.Object.extend("Food");
        var Mood = Parse.Object.extend("Mood");
        var Excercise = Parse.Object.extend("Excercise");

        supersonic.logger.log("created objects");

        //supersonic.logger.log(user);

        var newFood = new Food();
        supersonic.logger.log("set food 0");
        newFood.set("foodName",$scope.ufood.title);
        supersonic.logger.log("set food 1");
        newFood.set("user",Parse.User.current());

        supersonic.logger.log("set food 2");

        var newMood = new Mood();
        newMood.set("moodName", $scope.user1.mood);
        newMood.set("user",Parse.User.current());

        supersonic.logger.log("set mood");

        var newEx = new Excercise();
        newEx.set("exName", $scope.uex);
        newEx.set("duration",$scope.uDur);
        newEx.set("user",Parse.User.current());

        supersonic.logger.log("set ex");

        newFood.save(null, {
          success: function(newFood) {
            // Execute any logic that should take place after the object is saved.
            supersonic.logger.log("food saved");
          },
          error: function(newFood, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            supersonic.logger.log("food NOT saved");
          }
        });
        newMood.save(null, {
          success: function(newMood) {
            // Execute any logic that should take place after the object is saved.
            supersonic.logger.log("mood saved");
          },
          error: function(newMood, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            supersonic.logger.log("mood NOT saved");
          }
        });
        newEx.save(null, {
          success: function(newEx) {
            // Execute any logic that should take place after the object is saved.
            supersonic.logger.log("ex saved");
          },
          error: function(newEx, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            supersonic.logger.log("ex not saved");
          }
        });
        supersonic.ui.dialog.alert("Saved successfully");
        supersonic.ui.layers.pop();

    };

    
    
    
 });
