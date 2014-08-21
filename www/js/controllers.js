angular.module('appalm.controllers', [])

.controller('IngresoUsuarioCtrl',function($scope, $state, $ionicSlideBoxDelegate){
    
    $scope.ir = function(estado){
        console.log(estado);
        $state.go(estado);
    };
    
    $scope.validarUsuario = {
        color: 'azul',
        metodo: 'ir',
        metodoOpcion: 'alm.ingreso-contrasenia',
        contenido: 'Validar Usuario'
    };
    
    
    /*$scope.validarUsuario = function(usuario){
        if(usuario != undefined) {
            $state.go('ingreso-contrasenia');	
        }
        else {
            $state.go('');
        }
    };*/
    
    $scope.slideChanged = function(index) {        
        $scope.slideIndex = index;
    };

})

.controller('IngresoContraseniaCtrl',function($scope, $state, $ionicSlideBoxDelegate){
    $scope.validarContrasenia = {
        color: 'azul',
        metodo: 'ir',
        metodoOpcion: 'ingreso',
        contenido: 'Ingresar'
    };
    
    /*$scope.validarContrasenia = function(contrasenia){
        if(contrasenia != undefined) {
            $state.go('');	
        }
        else {
            $state.go('alm.retiro-finalizar');
        }
    };*/
    
    $scope.slideChanged = function(index) {        
        $scope.slideIndex = index;
    };

})

.controller('ALMCtrl', function($scope, $state, $ionicSideMenuDelegate, $ionicPopover ,MenuPpal, MenuPpalIngresado, MenuDerecho) {
    
    $scope.menuderecho = MenuDerecho.all();
    $scope.autorizado = true;
    
    if($scope.autorizado){
        $scope.menuppal = MenuPpalIngresado.all();
    }else{
        $scope.menuppal = MenuPpal.all();
    }
    
    //OJO ELIMINAR PARA PRODUCCION SIGUIENTE VALOR
    //Variable con valor para detalle de cuenta con usuario ingresado
    $scope.menuppal.detalleCuenta = '1020';
    
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

.controller('ContactoCtrl',function($scope, $state){
    $scope.irAChat = {
        color: 'azul',
        metodo: 'ir',
        metodoOpcion: 'alm.alm.estado',
        contenido: 'Chat en línea'
    };
    
    $scope.contactos = [
        {"sucursal": "Bógota", "telefono":"+1 343 0000"},
        {"sucursal": "Medellín", "telefono":"+4 510 9000"},
        {"sucursal": "Cali", "telefono":"+2 554 0505"}
    ]
})

.controller('EstadoCtrl',function($scope, $state, Movimientos, TimeOut){
    
    TimeOut.muerte();
    
    $scope.movimientos = Movimientos.all();
    
    $scope.ir = function(estado){
        try{
            $state.go(estado);
        }catch(e){
            console.log(e);
        }
    };
    
    $scope.botonTransaccion = {
        color: 'azul',
        contenido: 'Ir a Transacciones'
    };
    
    $scope.botonMovimiento = {
        color: 'azul',
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

.controller('MovimientoCtrl',function($scope, $state, Movimientos, TimeOut){

    TimeOut.muerte();
    
    $scope.movimientos = Movimientos.all();
    
    $scope.ir = function(estado){
        try{
            $state.go(estado);
        }catch(e){
            console.log(e);
        }
    };
    
    $scope.botonTransaccion = {
        color: 'azul',
        contenido: 'Ir a Transacciones'
    };
    
    $scope.encabezado = {
        colorIcono: 'energized',
        contenido: 'Movimientos de la cuenta'
    };
    
    $scope.subtitulo = {
        cuenta: '1020',
        titulo: 'eduardo perez fortich',
        tituloCuenta: 'Cuenta',
        tituloDetalle: 'Saldo disponible',
        valor: '450000'
    };
})

.controller('RetiroGenerarCtrl',function($scope, $state){
    $scope.generarPin = {
        color: 'azul',
        metodo: 'ir',
        metodoOpcion: 'alm.retiro-finalizar',
        contenido: 'Generar Pin'
    };
})

.controller('RetiroFinalizarCtrl',function($scope, $state, $ionicModal){
    $scope.finalizar = {
        color: 'rojo',
        metodo: 'ir',
        metodoOpcion: 'alm.retiro-finalizar',
        contenido: 'Finalizar'
    };
    
    $scope.irATransacciones = {
        color: 'azul',
        metodo: 'ir',
        metodoOpcion: 'alm-transacciones',
        contenido: 'Ir a Transacciones'
    };
    
    $scope.cancelarPin = {
        color: 'rojo',
        metodo: 'ir',
        metodoOpcion: 'alm.retiro-generar',
        contenido: 'Cancelar Pin'
    };
    
    $ionicModal.fromTemplateUrl('../www/templates/alm/alm-transacciones.html', function(modal) {
        $scope.modal = modal;
      }, {
        animation: 'slide-in-up',
        focusFirstInput: true
    }); 
})

.controller('ModalTransaccionesCtrl', function($scope, $state) {
    $scope.encabezado = {
        "colorIcono" : "energized",
        "contenido" : "Transacciones"
    };
    $scope.transacciones = [
        {
            "transaccion" : "Transferir dinero", 
            "descripcion" : "Enviar dinero a una cuenta de terceros."
        },
        {
            "transaccion" : "Retiros" , 
            "descripcion" : "Generar pin para poder retirar dinero en cajeros automáticos." 
        },
        {
            "transaccion" : "Movimientos",
            "descripcion" : "Consultar los movimientos de la cuenta."
        }
    ]; 
})

.controller('TransferenciaRealizarCtrl',function($scope, $state, OpcionesTransaccionRadio, TimeOut){    
    
    TimeOut.muerte();
    
    $scope.ir = function(estado){
        try{
            $state.go(estado);
        }catch(e){
            console.log(e);
        }
    };
    
    $scope.botonTransaccion = {
        color: 'gris',
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

.controller('TransferenciaConfirmarCtrl',function($scope, $state, ResumenTransferencia, TimeOut){
    
    TimeOut.muerte();
    
    $scope.resumen = ResumenTransferencia.all();
    
    $scope.ir = function(estado){
        try{
            $state.go(estado);
        }catch(e){
            console.log(e);
        }
    };
    
    $scope.botonCancelar = {
        color: 'rojo',
        contenido: 'Cancelar'
    };
    
    $scope.botonConfirmar = {
        color: 'gris',
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

.controller('TransferenciaFinalizarCtrl',function($scope, $state, ResumenTransferencia, TimeOut){
    
    TimeOut.muerte();
    
    $scope.resumen = ResumenTransferencia.all();
    
    $scope.ir = function(estado){
        try{
            $state.go(estado);
        }catch(e){
            console.log(e);
        }
    };
    
    $scope.botonTransacciones = {
        color: 'azul',
        contenido: 'Ir a Transacciones'
    };
    
    $scope.botonFinalizar = {
        color: 'rojo',
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