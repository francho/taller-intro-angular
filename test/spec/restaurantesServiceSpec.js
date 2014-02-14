'use strict';

describe('Service: RestaurantesService', function () {
  // instantiate service
  var RestaurantesService;
  var $httpBackend;


  var expect = chai.expect;


  beforeEach(function () {
    module('zgzApp');

    inject(function (_RestaurantesService_) {
      RestaurantesService = _RestaurantesService_;
    });

    inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      // backend definition common for all tests

      $httpBackend.when('GET', /restaurantes\.json/).respond(dummyRestaurantesResponse());
    });
  });

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('debe cargar el fichero de restaurantes', function () {
    $httpBackend.expectGET('restaurantes.json');

    RestaurantesService.getRestaurantes();
    $httpBackend.flush();
  });

  it('la respuesta debe tener el formato correcto', function () {
    var respuestaActual = RestaurantesService.getRestaurantes();
    $httpBackend.flush();

    expect(respuestaActual).to.have.property('totalCount');
    expect(respuestaActual).to.have.property('start');
    expect(respuestaActual).to.have.property('rows');
    expect(respuestaActual).to.have.property('result').that.is.an('array');

    var primerRestaurante = respuestaActual.result[0];

    expect(primerRestaurante).to.have.property('id');
    expect(primerRestaurante).to.have.property('title');
    expect(primerRestaurante).to.have.property('streetAddress');
    expect(primerRestaurante).to.have.property('postalCode');
    expect(primerRestaurante).to.have.property('addressLocality');
    expect(primerRestaurante).to.have.property('tel');
    expect(primerRestaurante).to.have.property('email');
    expect(primerRestaurante).to.have.property('url');
    expect(primerRestaurante).to.have.property('image');
    expect(primerRestaurante).to.have.property('comment');
    expect(primerRestaurante).to.have.property('tenedores');

  });

  it('debe poder añadir restaurantes al final', function() {
    var respuestaActual = RestaurantesService.getRestaurantes();
    $httpBackend.flush();

    expect(respuestaActual).to.have.property('result').to.have.length(2);

    var dummyRestaurante = {
      'id': 999,
      'title': 'dummy restaurant',
      'tenedores': 2
    }

    RestaurantesService.nuevoRestaurante(dummyRestaurante);
    expect(respuestaActual).to.have.property('result').to.have.length(3);

    var ultimoRestaurante = respuestaActual.result[2];

    expect(ultimoRestaurante).to.be.eql(dummyRestaurante);
  });



  function dummyRestaurantesResponse() {
    return {
      "totalCount": 2,
      "start": 0,
      "rows": 2,
      "result": [
        {
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
        },
        {
          "id": 16,
          "title": "HOTEL PALAFOX",
          "streetAddress": "C/ Marqués de Casa Jiménez s/n",
          "postalCode": "50004",
          "addressLocality": "Zaragoza",
          "tel": {
            "tel": "976 23 77 00",
            "fax": "976 23 47 05"
          },
          "email": "hotelpalafox@palafoxhoteles.com",
          "url": "http://www.palafoxhoteles.com",
          "image": "/cont/paginas/turismo/oficina/rsc/img/empresa/022. I_PalafoxCervantes.jpg",
          "comment": "Restaurante Aragonia Paradis"
        }
      ]
    }
  }

});