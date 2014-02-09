'use strict';

angular.module('zgzApp')
  .controller('ListadoController', function ($scope, RestaurantesService) {
    $scope.restaurantes = RestaurantesService.getRestaurantes();

    $scope.orden = 'title';
    $scope.ordenInverso = false;
    $scope.busqueda = '';
  }
);

