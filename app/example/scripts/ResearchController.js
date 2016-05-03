angular
  .module('example')
  .controller('ResearchController', function($scope, supersonic) {
    
    Parse.initialize("HxZKObXH6PGYX3yR0KXj1gCDHc5ON3oYWwcJXql9", "s6JNCHywzyV77o081q4qaV0reQTp0T9pKXtjKYV1");
    

    $scope.testvar ="test Var 1"
    $scope.articles=[];

    supersonic.ui.views.current.whenVisible(function() {

        supersonic.logger.log("View is whenVisible");
        console.log("CS: View is visible")
        var Articles = Parse.Object.extend("Articles");
        var query = new  Parse.Query("Articles");
        query.find({
            success: function(results){

                for (var i = 0; i < results.length;i++){

                    var temp = results[i];
                    supersonic.logger.log(temp.get('heading'));
                    var tempHeading = temp.get('heading');
                    var tempId = i + 2;
                    var tempBlurb = temp.get('blurb').substring(0,100) + "...";
                    var tempUrl = temp.get('url')

                    $scope.articles.push({heading:tempHeading , id:tempId, blurb:tempBlurb, url:tempUrl});
                    console.log($scope.articles);
                    supersonic.logger.log($scope.articles);
                }
                $scope.$apply();  
                  
            },
            error: function(err){
            }

        });  
        

    });
    

    
    
    
    
 });
