angular.module('myApp', ['uiGmapgoogle-maps'])
.service('mapService', ['$rootScope', function ($scope) {
  var list = [];

  this.add = function (mapData) {
    list.push({
      id: mapData.id,
      latitude: mapData.latitude,
      longitude: mapData.longitude
    });
  };
}])
.controller('MapController', ['$scope', 'mapService', function ($scope, mapService) {
    $scope.select = function () {
      mapService.add($scope.mapData)
    }

    $scope.gmap1 = [
     {
       "id":1,
       "latitude":35.459923,
       "longitude":139.635290,
       "title":"パシフィコ横浜"
     }
   ];

   $scope.gmap2 = [
    {
      "id":1,
      "latitude":35.457511,
      "longitude":139.632704,
      "title":"みなとみらい駅"
    }
  ];

  $scope.gmap3 = [
   {
     "id":1,
     "latitude":35.681307,
     "longitude":139.765990,
     "title":"東京駅"
   }
 ];

  $scope.mapTokyo = {
    center: {
      latitude:35.681307,
      longitude:139.765990,
    }, zoom: 16
  };

    $scope.mapYokohama = {
      center: {
        latitude: 35.457624,
        longitude: 139.633337
      }, zoom: 16
    };

    $scope.maps = [
     {
       "id":1,
       "title":"パシフィコ横浜"
     },
     {
       "id":2,
       "title":"みなとみらい駅"
     },
     {
       "id":3,
       "title":"東京駅"
     }
   ];
 }]);
