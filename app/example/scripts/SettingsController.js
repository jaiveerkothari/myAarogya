angular
  .module('example')
  .controller('SettingsController', function($scope, supersonic) {
    
    Parse.initialize("HxZKObXH6PGYX3yR0KXj1gCDHc5ON3oYWwcJXql9", "s6JNCHywzyV77o081q4qaV0reQTp0T9pKXtjKYV1");
    supersonic.logger.log("we are in SettingsController");
    $scope.master = {};
    
    $scope.buttonStyle="button-calm";

        
    

        

    
    
    
 });
