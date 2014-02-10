'use strict';

angular.module('zgzApp')
  .directive('zgzRestaurante', function () {
    return {
      templateUrl: 'views/partials/restaurante.html',
      restrict: 'E',
      scope: {
        'restaurante': '=ngModel',
        'verTodo': '&'
      },
      controller : function($scope) {
        $scope.verTodo = false;
      }
    };
  });
