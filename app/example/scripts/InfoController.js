angular
  .module('example')
  .controller('InfoController', ['$scope',function($scope, supersonic) {
       Parse.initialize("HxZKObXH6PGYX3yR0KXj1gCDHc5ON3oYWwcJXql9", "s6JNCHywzyV77o081q4qaV0reQTp0T9pKXtjKYV1");
       //Parse.initialize("9ZMoGrZm9iXcoZVZzrt3yh7AJG9GpzbvrD8JDiCz", "pKhmjvhc6hWm7FmsrNjKEvbEac1446gDvNaCEO3k");
      supersonic.ui.views.current.params.onValue(function(values){
            alert(values);
            $scope.hospitalId = values.id;
      })

      var hospitalsQuery = Parse.Object.extend("hospitals");
      alert($scope.hospitalId);   
}]);
