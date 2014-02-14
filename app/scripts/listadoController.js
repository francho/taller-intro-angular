'use strict';


zgzApp.controller('ListadoController', function ($scope, RestaurantesService) {
  $scope.restaurantes = RestaurantesService.getRestaurantes();

  $scope.limite = 10;

  $scope.verMas = function() {
    $scope.limite += 10;
  }

});