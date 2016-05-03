angular
  .module('example')
  .controller('HospitalController', ['$scope',function($scope, supersonic) {
       //Parse.initialize("9ZMoGrZm9iXcoZVZzrt3yh7AJG9GpzbvrD8JDiCz", "pKhmjvhc6hWm7FmsrNjKEvbEac1446gDvNaCEO3k");
       Parse.initialize("HxZKObXH6PGYX3yR0KXj1gCDHc5ON3oYWwcJXql9", "s6JNCHywzyV77o081q4qaV0reQTp0T9pKXtjKYV1");
      //supersonic.ui.views.current.params.onValue(function(values){
        //    $scope.hospitalId = values.id;
     // })

      var hospitalsQuery = Parse.Object.extend("hospitals");
/*
      $scope.hospitals = [];
      var query = new Parse.Query(hospitalsQuery);
      if($scope.type == undefined){
      }else{
        query.equalTo("Type", $scope.type);
      }
      if($scope.city == undefined){
      }else{
        query.equalTo("City", $scope.city);
      }
      if($scope.zip == undefined){
      }else{
        alert("defined");
        query.equalTo("STDCode", $scope.zip);
      }
      if($scope.zip==undefined & $scope.city==undefined &
        $scope.type==undefined)
        query.equalTo("STDCode", "zdf");
      query.limit(10);
      query.find({
        success: function(results){
          for(var i = 0; i < results.length; i++){
              var iHospital = results[i];
             $scope.hospitals.push({
              id: iHospital.id,
              name:iHospital.get("Hospital"),
              addr1: iHospital.get("Type")});
            }
        },
        error: function(error){
            alert("error:" + error.message);
          }
        
      });

*/
      
      
      $scope.findHospital = function(){
      alert($scope.city);
       $scope.hospitals = [];
      var query = new Parse.Query(hospitalsQuery);
      if($scope.type == undefined){
      }else{
        query.equalTo("Type", $scope.type);
      }
      if($scope.city == undefined){
      }else{
        query.equalTo("City", $scope.city);
      }
      if($scope.zip == undefined){
      }else{
        query.equalTo("STDCode", $scope.zip);
      }
      if($scope.zip==undefined & $scope.city==undefined &
        $scope.type==undefined)
        query.equalTo("STDCode", "zdf");
      query.limit(10);
      query.find({
        success: function(results){
          for(var i = 0; i < results.length; i++){
              var iHospital = results[i];
             $scope.hospitals.push({
              id: iHospital.id,
              name:iHospital.get("Hospital"),
              addr1: iHospital.get("Type")});
            }
        },
        error: function(error){
            alert("error:" + error.message);
          }
        
      });

      
      };
}]);
