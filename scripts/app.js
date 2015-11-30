angular.module('todoListApp', [])
  .controller('mainCtrl', function($scope, dataService) {
    $scope.helloConsole = dataService.helloConsole;
    $scope.learningNgChange = function() {
      console.log("an input changed");
    };

    $scope.todos = [{
      "name": "clean the house"
    }, {
      "name": "water the yard"
    }, {
      "name": "eat like a sarrlak"
    }, {
      "name": "clean my face"
    }, {
      "name": "drink all the beers"
    }]
  })

.service('dataService', function() {
  this.helloConsole = function() {
    console.log("you are being serviced")
  }
});
