angular.module('appalm.controllers', [])

.controller('IngresoCtrl',function($scope, $state){
    
    $scope.ingresar = function(redsocial){
        //
    }
    
    $scope.saltar = function(){
        $state.go('alm.estado');
    };
    
})


.controller('ALMCtrl', function($scope, $state, $ionicSideMenuDelegate, $ionicPopover ,MenuPpal, MenuPpalIngresado, MenuDerecho) {
    $scope.menuppal = MenuPpal.all();
    $scope.menuderecho = MenuDerecho.all();
    
    //alm-popover.html
    $ionicPopover.fromTemplateUrl('../templates/alm/directivas/alm-menu-derecho.html',  {
        scope: $scope
    }).then(function(popover){
        $scope.popover = popover;
    });
    
    $scope.ir = function(estado){
        try{
            if(estado){
                if(estado === 'cerrar'){
                    //cerrar();
                }else{
                    $state.go(estado);
                }
            }else{
                estado = null;
            }
        }catch(e){
            console.log(e);
        }   
    };
    
    
    $scope.abrirMenuDerecho = function($event){
        try{
            $scope.popover.show($event);
        }catch(e){
            console.log(e);  
        }
    };
    
    //No usado en el momento, cierra con opcion por defecto backdropClickToClose
    $scope.cerrarMenuDerecho = function() {
        $scope.popover.hide();
    };
    /*
    $scope.$on('$destroy', function() {
        $scope.popover.remove();
    });
    
    $scope.$on('popover.hidden', function() {
        
    });
    
    $scope.$on('popover.removed', function() {
        
    });
    */
    
    $scope.abrirMenuPpal = function(){
        $ionicSideMenuDelegate.toggleLeft();
    };
    
})

.controller('SitioCtrl', function($scope, $stateParams, Sitios) {
    $scope.sitio = Sitios.get($stateParams.sitioId);
})

.controller('ContactoCtrl',function($scope, $state){})

.controller('EstadoCtrl',function($scope, $state, Movimientos){

    $scope.movimientos = Movimientos.all();
    
    $scope.ir = function(estado){
        console.log(estado);
        $state.go(estado);
    };
    
    $scope.botonTransaccion = {
        color: 'azul',
        metodo: 'ir',
        metodoOpcion: 'alm.alm.estado',
        contenido: 'Ir a Transacciones'
    };
    
    $scope.botonMovimiento = {
        color: 'azul',
        metodo: 'ir',
        metodoOpcion: 'alm.movimiento',
        contenido: 'Movimientos'
    };
    
    /*
    $scope.mensaje = {
        titulo: 'titulo mensaje',
        contenido: 'CONTENIDO mensajes aalalallalaala'
    };
    */
    
    $scope.acceso = {
        hora: '11:25:09',
        fecha: '07/08/2014',
        direccionIP: '200.110.108.168'
    };
    
    $scope.encabezado = {
        colorIcono: 'energized',
        contenido: 'Últimos movimientos de la cuenta'
    };
    
    $scope.subtitulo = {
        cuenta: '1020',
        titulo: 'eduardo perez fortich',
        tituloCuenta: 'Cuenta',
        tituloDetalle: 'Saldo disponible',
        valor: '450000'
    };
})

.controller('MovimientoCtrl',function($scope, $state){})

.controller('RetiroGenerarCtrl',function($scope, $state){})

.controller('RetiroFinalizarCtrl',function($scope, $state){})

.controller('TransferenciaRealizarCtrl',function($scope, $state, OpcionesTransaccionRadio){
    
    $scope.ir = function(estado){
        console.log(estado);
        $state.go(estado);
    };
    
    $scope.botonTransaccion = {
        color: 'gris',
        metodo: 'ir',
        metodoOpcion: 'alm.alm.transferencia-confirmar',
        contenido: 'Transferir'
    };
    
    $scope.formularioRadio = OpcionesTransaccionRadio.all();
    
    $scope.encabezado = {
        colorIcono: 'energized',
        contenido: 'Últimos movimientos de la cuenta'
    };
    
    $scope.subtitulo = {
        titulo: 'Transferencia de dinero',
        //tituloFuerte: 'Retire dinero en cajeros',
        subtitulo: 'Saldo disponible para transferencias',
        contenidoFuerte: '$440000',
        //contenidoSuave: 'Este texto se ve suave si hay',
        //imagenUrl: 'img/ionic.png',
        //imagenLeyenda: 'alguna leyend'
    };
})

.controller('TransferenciaConfirmarCtrl',function($scope, $state, ResumenTransferencia){
    $scope.resumen = ResumenTransferencia.all();
    
    $scope.ir = function(estado){
        console.log(estado);
        $state.go(estado);
    };
    
    $scope.botonCancelar = {
        color: 'rojo',
        metodo: 'ir',
        metodoOpcion: 'alm.alm.transferencia-realizar',
        contenido: 'Cancelar'
    };
    
    $scope.botonConfirmar = {
        color: 'gris',
        metodo: 'ir',
        metodoOpcion: 'alm.alm.transferencia-finalizar',
        contenido: 'Confirmar'
    };
    
    $scope.mensaje = {
        titulo: 'Confirmar transferencia',
        contenido: 'Se ha enviado un mensaje de texto a su celular. Por favor introducir este código en la siguiente caja de texto'
    };
    
    $scope.encabezado = {
        colorIcono: 'energized',
        contenido: 'Resumen de la transacción'
    };

})

.controller('TransferenciaFinalizarCtrl',function($scope, $state, ResumenTransferencia){
    $scope.resumen = ResumenTransferencia.all();
    
    $scope.ir = function(estado){
        console.log(estado);
        $state.go(estado);
    };
    
    $scope.botonTransacciones = {
        color: 'azul',
        metodo: 'ir',
        metodoOpcion: 'alm.alm.transferencia-realizar',
        contenido: 'Ir a Transacciones'
    };
    
    $scope.botonFinalizar = {
        color: 'rojo',
        metodo: 'ir',
        metodoOpcion: 'alm.alm.estado',
        contenido: 'Finalizar'
    };
    
    $scope.encabezado = {
        colorIcono: 'energized',
        contenido: 'Resumen de la transacción'
    };
    
    $scope.mensaje = {
        titulo: 'Transferencia finalizada correctamente',
        subtitulo: 'Código de referencia:',
        contenido: '2535665',
        icono: 'ion-checkmark-circled'
    };
    
});