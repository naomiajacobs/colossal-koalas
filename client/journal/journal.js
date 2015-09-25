var journal = angular.module('greenfeels.journal');

journal.controller('JournalController', ['$scope', '$window', '$location', 'Posts',
  function ($scope, $window, $location, Entries) {
    // Create journal model
    $scope.journal = {};

    $scope.getEntries = function() {
      Entries.getAll()
        .then(function(resp) {
          $scope.journal.entries = resp; 
        })
        .catch(function(err) {
          console.log('Error getting entries: ', err);
        });
    };
    // Display all posts on page load
    $scope.getPosts();
  }
]);
