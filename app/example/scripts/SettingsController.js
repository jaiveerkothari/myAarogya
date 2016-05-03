angular
  .module('example')
  .controller('SettingsController', function($scope, supersonic) {
    //Parse.initialize("9ZMoGrZm9iXcoZVZzrt3yh7AJG9GpzbvrD8JDiCz", "pKhmjvhc6hWm7FmsrNjKEvbEac1446gDvNaCEO3k");
    Parse.initialize("HxZKObXH6PGYX3yR0KXj1gCDHc5ON3oYWwcJXql9", "s6JNCHywzyV77o081q4qaV0reQTp0T9pKXtjKYV1");
    supersonic.logger.log("we are in SettingsController");
    $scope.master = {};
    // $scope.user1={mood:"happy"};
    // $scope.ufood="yo";
    // $scope.uex="yo";
    $scope.buttonStyle="button-calm";

        
    

        

    
    
    
 });
