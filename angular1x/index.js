const app = angular
  .module('app', [])
  .controller('searchController', SearchController);

function SearchController($scope, $http) {
  const BASE_URL = 'https://hn.algolia.com/api/v1/';
  $scope.searchTerm = '';
  $scope.posts = [];

  $scope.searchApi = () => {
    const url = `${BASE_URL}search?query=${$scope.searchTerm}&hitsPerPage=200`;
    return $http
      .get(url)
      .then((result) => {
        $scope.posts = result.data.hits;
      });
  };
}

SearchController.$inject = ['$scope', '$http'];
