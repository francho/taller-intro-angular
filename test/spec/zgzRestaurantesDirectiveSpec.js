describe('zgzRestauranteDirective', function () {

  var expect = chai.expect;

  var element, scope;

  beforeEach(function () {
    module('zgzApp', 'views/partials/restaurante.html');
  });

  function dummyRestaurante() {
    return {
      "id": 14,
      "title": "RESTAURANTE EL CACHIRULO",
      "streetAddress": "Ctra. de Logroño Km. 1,500",
      "postalCode": "50011",
      "addressLocality": "Zaragoza",
      "tel": {
        "tel": "976 46 01 46",
        "fax": "976 46 01 52"
      },
      "email": "congresos@elcachirulo.es",
      "url": "http://www.elcachirulo.es",
      "image": "/cont/paginas/turismo/oficina/rsc/img/empresa/062.-RTeCachiruloAP.jpg",
      "comment": "Carta y platos adaptados. Se aconseja reservar",
      "tenedores": 2
    };
  }

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();

    scope.restaurante = dummyRestaurante();

    element = angular.element('<zgz-restaurante ng-model="restaurante"></zgz-restaurante>');

    element = $compile(element)(scope);
    scope.$digest();
  }));

  it('debe mostrar la información básica (nombre y tenedores)', function () {
    var title = element.find('h3').text();
    expect(title).to.have.string('RESTAURANTE EL CACHIRULO');
    expect(title).to.have.string('2');
  });

  it('por defecto sólo se mostrará la información básica', function () {
    var textoMostrado = element.text();

    expect(textoMostrado).not.to.have.string('Ctra. de Logroño Km. 1,500');
  });

  it('muestra información extendida al pulsar en el título', function() {
    element.find('h3')[0].click();
    waits(500);

    var textoMostrado = element.text();

    expect(textoMostrado).to.have.string('Ctra. de Logroño Km. 1,500');
  });

});