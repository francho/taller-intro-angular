'use strict';

zgzApp.service('RestaurantesService', function($resource) {
  var restaurantes = $resource('restaurantes.json').get();

  return {
    'getRestaurantes' : function() {
      return restaurantes;
    },

    'nuevoRestaurante' : function(restaurante) {
      restaurantes.result.push(restaurante);
    }
  }

});