angular.module('todoListApp', [])
  .controller('mainCtrl', function($scope) {
    $scope.learningNgChange = function() {
      console.log("an input changed");
    };

    $scope.todos = [{
      "name": "clean the house"
    }, {
      "name": "water the butts"
    }, {
      "name": "eat like a sarrlak"
    }, {
      "name": "poop"
    }, {
      "name": "drink all the beers"
    }]
  });
