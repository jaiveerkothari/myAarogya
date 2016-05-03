angular
  .module('example')
  .controller('AddController', function($scope, supersonic) {
    //Parse.initialize("9ZMoGrZm9iXcoZVZzrt3yh7AJG9GpzbvrD8JDiCz", "pKhmjvhc6hWm7FmsrNjKEvbEac1446gDvNaCEO3k");
    Parse.initialize("HxZKObXH6PGYX3yR0KXj1gCDHc5ON3oYWwcJXql9", "s6JNCHywzyV77o081q4qaV0reQTp0T9pKXtjKYV1");
    var images = Parse.Object.extend("images");
    $scope.addItem = function(){
	var newImage = new images();
        var newFile = new Parse.File("photo.jpg", {base64:$scope.imageData});
	newImage.set("img", newFile);
	newImage.save();
	supersonic.ui.dialog.alert("Saved successfully");
     };
	$scope.getPicture = function(){
		navigator.camera.getPicture(onSuccess, onFail
		,{quality: 50, destinationType: Camera.DestinationType.DATA_URL }
		);
		function onSuccess(imageData) {
		var image = document.getElementById('myAddImage');
		image.src = "data:image/jpeg;base64," + imageData;
		$scope.imageData = imageData;  
		};

		function onFail(message) {
		var options = {
		  message: "Failed to add because " + message,
		  buttonLabel: "Close"
		};

		supersonic.ui.dialog.alert("Error!", options).then(function() {
		  supersonic.logger.log("Alert closed.");
		});
		};
	};

});
