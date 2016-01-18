myFlickr.controller('menu', ['$scope', "$http", 'PhotoSet', "$location", '$routeParams', function($scope, $http, PhotoSet, $location, $routeParams) {


  $scope.photos = {};


  $scope.getPhotos = function(item) {
 console.log(item);
    PhotoSet.getPhotos(item)
      .success(function(data) {

        $scope.photos = data.photoset
    
      })
  }

  //booh!

  // $scope.getUser = function(username) {
  //   $scope.pix = [];
  //   $scope.idHolder = []
  //   console.log(username)
  //   PhotoSet.getUser(username)

  //   .success(function(data) {
  //     console.log(data)
  //     if (data.code === 1 || undefined) {
  //       alert(data.message)
  //     } else {
  //       $scope.getSet(data.user.id)
  //     }
  //   })
  // }


}])
