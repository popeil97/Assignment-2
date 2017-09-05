angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.searchInput = "";
    $scope.newListing = Listings;
    $scope.listings = Listings;
    $scope.detailedInfo = {code: "", buildingName: "", lattitude: "", longitude: "", address: ""};
    $scope.info = {code: "NA", buildingName: "NA", latitude: "NA", longitude: "NA", address: "NA"};;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */

     $scope.filterList = function() {
       //alert($scope.listings[0]["name"]);
       if($scope.searchInput == "") {
         $scope.newListing = $scope.listings;
         return;
       }
       //alert("Works");
       $scope.newListing = [];

       for(var i = 0; i < $scope.listings.length; i++) {
         if($scope.listings[i]["name"].includes($scope.searchInput)) {
           $scope.newListing.push($scope.listings[i]);

         }
       }
     }

    $scope.addListing = function() {
      if($scope.detailedInfo.code == "" || $scope.detailedInfo.buildingName == "") {
        alert("Both Fields Must Be Filled");
      }

      else {
        var temp = { "code":$scope.detailedInfo.code, "name":$scope.detailedInfo.buildingName,
          "coordinates": { latitude: $scope.detailedInfo.lattitude, longitude: $scope.detailedInfo.longitude },
          "address": $scope.detailedInfo.address
        };
        $scope.listings.push(temp);
        $scope.detailedInfo.code = "";
        $scope.detailedInfo.buildingName = "";
        $scope.detailedInfo.lattitude = "";
        $scope.detailedInfo.longitude = "";
        $scope.detailedInfo.address = "";
      }
    };
    $scope.deleteListing = function(index) {
      var temp = $scope.newListing[index];
      var originalIndex = $scope.listings.indexOf(temp);
      $scope.newListing.splice(index, 1);
      $scope.listings.splice(originalIndex, 1);
      //also need to delete from original listing
    };
    $scope.showDetails = function(index) {
      $scope.info.code = "NA";
      $scope.info.buildingName = "NA";
      $scope.info.latitude = "NA";
      $scope.info.longitude = "NA";
      $scope.info.address = "NA";

      var temp = $scope.listings[index];
      var key = temp["code"];
      var name = temp["name"];
      var lat = temp["coordinates"]["latitude"];
      var long= temp["coordinates"]["longitude"];
      var addr = temp["address"];

      var info = { code: key, buildingName: name, latitude: lat, longitude: long, address: addr };

      $scope.info = info;

    };


  }
]);
