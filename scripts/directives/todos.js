angular.module('todoListApp')
  .directive('todos', function() {
    return {
      templateURL: 'templates/todos.html',
      controller: 'mainCtrl',
      replace: true
    }
  })
