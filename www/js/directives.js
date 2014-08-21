angular.module('appalm.directives', [])

.directive('almMensaje',function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/alm/directivas/alm-mensaje.html'
    };
})

.directive('almMensajeExito',function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/alm/directivas/alm-mensaje-exito.html'
    };
})

.directive('almSubtitulo',function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/alm/directivas/alm-subtitulo.html'
    };
})

.directive('almSubtituloSimple',function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/alm/directivas/alm-subtitulo-simple.html'
    };
})

.directive('almSubtituloSemisimple',function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/alm/directivas/alm-subtitulo-semisimple.html'
    };
})

.directive('almSeparador',function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/alm/directivas/alm-separador.html'
    };
})

.directive('almEncabezado',function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/alm/directivas/alm-encabezado.html'
    };
})

.directive('almBoton',function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/alm/directivas/alm-boton.html',
        scope: {
            boton: '=boton',
            metodo: '&',
            metodoOpcion: '&'
        }
    };
});