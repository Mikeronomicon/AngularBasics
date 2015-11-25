angular.module('todoListApp', [])
  .controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
      console.log("it worked!");
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
