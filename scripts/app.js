angular.module('todoListApp', [])

.service('dataService', function($http) {
  this.helloConsole = function() {
    console.log("you are being serviced")
  };

  this.getTodos = function(callback) {
    $http.get('/mock/todos.json')
      .then(callback)
  };
  this.deleteTodo = function(todo) {
    console.log("the " + todo.name + "has been deleted!")
  };
  this.saveTodo = function(todo) {
    console.log("the " + todo.name + "has been saved!")
  }
});
