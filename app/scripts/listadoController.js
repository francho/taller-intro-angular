'use strict';

angular.module('zgzApp')
  .controller('ListadoController', function ($scope, RestaurantesService) {
    $scope.restaurantes = RestaurantesService.getRestaurantes();


    console.log($scope.restaurantes);

  }
);

