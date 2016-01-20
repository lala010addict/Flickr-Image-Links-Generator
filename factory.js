//angular.module('myFlickr.services', ['ngResource'])

myFlickr.factory('PhotoSet', ['$http', function($http) {

  var getPhotos = function(setId) {
    var URL = "https://api.flickr.com/services/rest/" +
      "?method=flickr.photosets.getPhotos" +
      "&api_key=" + api_key +
      "&photoset_id=" + setId +
      "&privacy_filter=1" +
      "&per_page=100" +
      "&format=json&nojsoncallback=1"


    return $http.get(URL, {
      cache: true
    }).success(function(data) {
      return data.photoset

    });
  }

  return {
    getPhotos: getPhotos
  };
}])
