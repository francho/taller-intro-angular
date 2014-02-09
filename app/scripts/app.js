'use strict';

angular.module('zgzApp', [
  'ngResource',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/listado.html',
        controller: 'ListadoController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
