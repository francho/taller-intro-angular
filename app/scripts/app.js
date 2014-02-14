'use strict';

// inicializar el módulo

// configuración inicial


var zgzApp = angular.module('zgzApp', [ 'ngRoute']);

zgzApp.config(function ($routeProvider) {
  $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'HolaController'
    }
  ).otherwise({
      redirectTo: '/'
    });
});
