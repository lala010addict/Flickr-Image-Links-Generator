myFlickr.controller('menu', ['$scope', "$http", 'PhotoSet', "$location", '$routeParams', function($scope, $http, PhotoSet, $location, $routeParams) {

  $scope.data = {
    singleSelect: null
  };


  $scope.photos = {};

  $scope.getPhotos = function(item) {
    console.log(item);
    PhotoSet.getPhotos(item)
      .success(function(data) {
    console.log(data.photoset);
        $scope.photos = data.photoset
      

      })
  }

}])
