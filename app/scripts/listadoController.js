'use strict';


zgzApp.controller('ListadoController', function ($scope, RestaurantesService) {
  $scope.restaurantes = RestaurantesService.getRestaurantes();

  $scope.orden = 'title';
  $scope.ordenInverso = false;
  $scope.busqueda = '';
  $scope.limite = 5;

  $scope.verMas = function () {
    $scope.limite += 5;
  }

  $scope.verMenos = function () {
    $scope.limite -= ($scope.limite > 5) ? 5 : 0;
  }

});