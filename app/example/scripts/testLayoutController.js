angular
  .module('example')
  .controller('testLayoutController', function($scope, supersonic) {
    //Parse.initialize("9ZMoGrZm9iXcoZVZzrt3yh7AJG9GpzbvrD8JDiCz", "pKhmjvhc6hWm7FmsrNjKEvbEac1446gDvNaCEO3k");
    Parse.initialize("HxZKObXH6PGYX3yR0KXj1gCDHc5ON3oYWwcJXql9", "s6JNCHywzyV77o081q4qaV0reQTp0T9pKXtjKYV1");
 
    

$scope.ideas=[{title: "Accommodation", id: 0},
{title: "Adventure sports", id: 1},
{title: "Amusement Park", id: 2},
{title: "Antiques Shops", id: 3},
{title: "Aquariums", id: 4},
{title: "Architectural Sites", id: 5},
{title: "Art Galleries", id: 6},
{title: "Bars, Pubs & Clubs", id: 7},
{title: "Beaches", id: 8},
{title: "Breakfast", id: 9},
{title: "Breweries", id: 10},
{title: "Broadway", id: 11},
{title: "Brunch", id: 12},
{title: "Cafes", id: 13},
{title: "Cinemas", id: 14},
{title: "Comedy Clubs", id: 15},
{title: "Dinner", id: 16},
{title: "Flea & Street Market", id: 17},
{title: "Hiking", id: 18},
{title: "Historical Sites", id: 19},
{title: "Jazz Bars", id: 20},
{title: "Lunch", id: 21},
{title: "Museums", id: 22},
{title: "National Parks", id: 23},
{title: "Religious Sites", id: 24},
{title: "Safari", id: 25},
{title: "Scenic Drives", id: 26},
{title: "Scuba & Snorkeling", id: 27},
{title: "Shopping", id: 28},
{title: "Souvenirs", id: 29},
{title: "Spas", id: 30},
{title: "Street Foods", id: 31},
{title: "Supper", id: 32},
{title: "Tours", id: 33},
{title: "Wineries", id: 34},
{title: "Zoo", id: 35}
 ];
   
 $scope.selected2=$scope.ideas[0];  

  var _selected;

  $scope.selected = "";
  $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  // Any function returning a promise object can be used to load values asynchronously
  

  $scope.ngModelOptionsSelected = function(value) {
    if (arguments.length) {
      _selected = value;
    } else {
      return _selected;
    }
  };

  $scope.modelOptions = {
    debounce: {
      default: 500,
      blur: 250
    },
    getterSetter: true
  };

  



        
    
 });
