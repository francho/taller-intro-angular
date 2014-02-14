describe('ListadoController', function () {
  var $scope;

  var expect = chai.expect;

  beforeEach(module('zgzApp'));

  beforeEach(inject(function ($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controller('ListadoController', {$scope: $scope});
  }));

  it('debe tener una propiedad "restaurantes" en el scope', function() {
    expect($scope).to.have.property('restaurantes');
  });

  it('debe crear una propiedad "orden" en el scope para el campo de orden (por defecto ordenará por nombre de hotel)', function () {
    expect($scope).to.have.property('orden').equal('title');
  });

  it('debe crear una propiedad "ordenInverso" en el scope para el tipo de ordenación (por defecto creciente)', function () {
    expect($scope).to.have.property('ordenInverso').equal(false);
  });

  it('debe crear una propiedad "busqueda" en el scope para almacenar el texto de búsqueda del usuario', function () {
    expect($scope).to.have.property('busqueda').equal('');
  });

  it('debe crear una propiedad "limite" en el scope para almacenar el límite de restaurantes a ver (por defecto 5)', function () {
    expect($scope).to.have.property('limite').equal(5);
  });

  it('debe tener un método "verMas()" en el scope para ampliar el listado', function() {
    expect($scope).to.respondTo('verMas');

    $scope.limite = 5;
    $scope.verMas();

    expect($scope.limite).to.be.equal(10);
  });

  it('debe tener un método "verMenos()" en el scope para reducir el listado', function() {
    expect($scope).to.respondTo('verMenos');

    $scope.limite = 10;
    $scope.verMenos();

    expect($scope.limite).to.be.equal(5);
  });

  it('el método verMenos() no debe reducir el listado por debajo del mínimo', function() {
    $scope.limite = 5;
    $scope.verMenos();
    expect($scope.limite).to.be.equal(5);
  });
});