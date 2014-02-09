describe('ListadoController', function () {
  var $scope;

  beforeEach(module('zgzApp'));

  beforeEach(inject(function ($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controller('ListadoController', {$scope: $scope});
  }));

  it('debe crear una propiedad para el campo de orden (por defecto ordenará por nombre de hotel)', function () {
    expect($scope.orden).toBe('title');
  });

  it('debe crear una propiedad para el tipo de ordenación (por defecto creciente)', function () {
    expect($scope.ordenInverso).toBe(false);
  });

  it('debe crear una propiedad para almacenar el texto de búsqueda del usuario', function () {
    expect($scope.busqueda).toBe('');
  });
});