'use strict';


zgzApp.controller('ListadoController', function ($scope, RestaurantesService) {
  $scope.restaurantes = RestaurantesService.getRestaurantes();

});