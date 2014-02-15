'use strict';

zgzApp.controller('AltaController', function ($scope, RestaurantesService, $location) {

    $scope.restaurante = {
      'title': '',
      'tenedores': null
    }

    $scope.restauranteVacio = function () {
      return !$scope.restaurante.title && !$scope.restaurante.tenedores;
    }

    $scope.guardarRestaurante = function() {
      var nuevoRestaurante = angular.copy($scope.restaurante);

      RestaurantesService.nuevoRestaurante(nuevoRestaurante);

      $location.path('/');
    }

  }
);

