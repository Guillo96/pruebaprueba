angular.module('appalm', ['ionic',
                               'appalm.controllersPal',
                                'appalm.directives',
                               'appalm.services',
                                'appalm.factories'
                              ])

.run(function($ionicPlatform, 
            $rootScope,
            $state,
            $window){
  $ionicPlatform.ready(function() {
        $state.go('alm.ingreso');
    
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('ingreso', {
        url: "/ingreso",
        controller: 'IngresoCtrl',
        templateUrl: "templates/ingreso.html"
    })

    .state('alm',{
        url: '',
        abstract: true,
        controller: 'ALMCtrl',
        templateUrl: 'templates/alm/alm.html'
     })

    .state('alm.contacto', {
        url: '',
        views: {
            'alm': {
                templateUrl: 'templates/alm/contacto.html',
                controller: 'ContactoCtrl'
            }
        }
    })

    .state('alm.estado', {
        url: '',
        views: {
            'alm': {
                templateUrl: 'templates/alm/estado.html',
                controller: 'EstadoCtrl'
            }
        }
    })
                          
    .state('alm.movimiento', {
        url: '',
        views: {
            'alm': {
                templateUrl: 'templates/alm/movimiento.html',
                controller: 'MovimientoCtrl'
            }
        }
    })
                          
    .state('alm.retiro-generar', {
        url: '/retiro/generar',
        views: {
            'alm': {
                templateUrl: 'templates/alm/retiro-generar.html',
                controller: 'RetiroGenerarCtrl'
            }
        }
    })

    .state('alm.retiro-finalizar', {
        url: '/retiro/finalizar',
        views: {
            'alm': {
            templateUrl: 'templates/alm/retiro-finalizar.html',
            controller: 'RetiroFinalizarCtrl'
            }
        }
    })
                          
    .state('alm.transferencia-realizar', {
        url: '',
        views: {
            'alm': {
            templateUrl: 'templates/alm/transferencia-realizar.html',
            controller: 'TransferenciaRealizarCtrl'
            }
        }
    })                    
    
    .state('alm.transferencia-confirmar', {
        url: '',
        views: {
            'alm': {
            templateUrl: 'templates/alm/transferencia-confirmar.html',
            controller: 'TransferenciaConfirmarCtrl'
            }
        }
    })
                          
    .state('alm.transferencia-finalizar', {
        url: '/transferencia/finalizar',
        views: {
            'alm': {
            templateUrl: 'templates/alm/transferencia-finalizar.html',
            controller: 'TransferenciaFinalizarCtrl'
            }
        }
    })

  $urlRouterProvider.otherwise('/ingreso');

});