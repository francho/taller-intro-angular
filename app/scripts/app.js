'use strict';

angular.module('zgzApp', [
  'ngResource',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'HolaController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
