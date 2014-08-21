angular.module('appalm.services', [])

.factory('MenuPpal', function() {

  var menuppal = [
    {
        id: 0,
        titulo: 'Contáctenos',
        subtitulo: 'Chat en línea y listado de números de las sucursales',
        estado: 'alm.contacto'
    },
    {
        id: 1,
        titulo: 'Redes Sociales',
        subtitulo: 'Comparte nuestra aplicación en redes sociales',
        estado: 'alm.redessociales'
    },
    {
        id: 2,
        titulo: 'Salir',
        subtitulo: 'Cerrar la aplicación',
        estado: 'cerrar'
    }
  ];

  return {
    all: function() {
      return menuppal;
    },
    get: function() {
      return menuppal[id];
    }
  }
})

.factory('MenuPpalIngresado', function() {

  var menuppal = [
    {
        id: 0,
        titulo: 'Estado de Cuenta',
        subtitulo: 'Muestra el saldo de su cuenta y los últimos movimientos',
        estado: 'alm.estado'
    },
    {
        id: 1,
        titulo: 'Transacciones',
        subtitulo: 'Despliega todas las operaciones disponibles de la aplicación',
        estado: 'alm.transferencia-realizar'
    },
    {
        id: 2,
        titulo: 'Contáctenos',
        subtitulo: 'Chat en línea y listado de números telefónicos de las sucursales',
        estado: 'alm.contacto'
    },
    {
        id: 3,
        titulo: 'Redes Sociales',
        subtitulo: 'Comparta nuestra aplicación en redes sociales',
        estado: 'alm.redessociales'
    },
    {
        id: 4,
        titulo: 'Salir',
        subtitulo: 'Salir del sistema y cerrar la aplicación',
        estado: 'cerrar'
    }
  ];

  return {
    all: function() {
      return menuppal;
    },
    get: function() {
      return menuppal[id];
    }
  }
})

.factory('MenuDerecho', function() {

  var menuderecho = {
    irAChat: {
        color: 'azul',
        metodo: 'ir',
        contenido: 'Chat en línea'
    },
    contactos: [
        {
            sucursal: 'Bogotá',
            telefono: '+1 343 0000'
        },
        {
            sucursal: 'Medellín',
            telefono: '+4 510 9000'
        },
        {
            sucursal: 'Cali',
            telefono: '+2 554 0505'
        }
    ]
  };

  return {
    all: function() {
      return menuderecho;
    },
    get: function() {
      return menuderecho[id];
    }
  }
})

.factory('OpcionesTransaccionRadio', function() {

  var opcionesTransaccionRadio = [
    {
        id: 0,
        contenido: 'Cuenta de Ahorros',
        valor: 'ahorros'
    },
    {
        id: 1,
        contenido: 'Cuenta Corriente',
        valor: 'corriente'
    }
  ];

  return {
    all: function() {
      return opcionesTransaccionRadio;
    },
    get: function(opcionId) {
      return opcionesTransaccionRadio[opcionId];
    }
  };
})

.factory('TimeOut', function($q,$state){
    var worker = new Worker('../js/timeout.js');
    var defer;
    console.log('servicio worker');
    worker.addEventListener('message', function(e){
        if(e['data'] != undefined){
            if(e['data'] === 'muerteSubita'){
                console.log('Salida de la App');
                try{
                    if(navigator.app){
                        navigator.app.exitApp();
                    }else{
                        if(navigator.device){
                            navigator.device.exitApp();
                        }else{
                            if(ionic.Platform.isWebView()){
                                navigator.app.exitApp();
                            }else{
                                console.log('No se detecta el dispositivo');
                                $state.go('alm.ingreso-usuario');
                            }
                        }
                    }
                    //worker.close();
                }catch(e){
                    console.log(e);
                }
            }
            defer.resolve(e['data']);
        }
    },false);
    
    return{
        muerte: function(data){
            defer = $q.defer();
            worker.postMessage({
                'myData': data
            });
            return defer.promise;
        },
        cerrar: function(data){
            defer = $q.defer();
            worker.postMessage({
                'myData': data
            });
            return defer.promise;
        }
    };
})

.factory('TimeOutTiempos', function(){
    var timeouts = [
        {
            id: 0,
            nombre: '5min',
            valor: '300000'
        },
        {
            id: 1,
            contenido: '2min',
            valor: '120000'
        },
        {
            id: 2,
            contenido: '10seg',
            valor: '10000'
        }
    ];

    return {
        all: function() {
            return timeouts;
        },
        get: function(opcionId) {
            return timeouts[opcionId];
        }
    };
})

.factory('Muerte', function(e){
    var data = e.data;
    var tiempo = setInterval(cerrar, 20000);

    switch(data.cmd){
        case 'muerte':
            console.log('otra vida');
            if(tiempo != undefined){
                console.log('vida sin tiempo');
                clearInterval(tiempo);
            }else{
                console.log('no se termina el tiempo');
            }
            if(tiempo != undefined){
                tiempo = setInterval(cerrar, 20000);
            }else{
                console.log('nueva vida');
            }
            break;
        default:
            break;
    }

    function cerrar() {
        console.log('adiosito');
        setTimeout(function(){
            //app.close();
            console.log('se va');
            self.postMessage('x');
        },1000);
    }
})

.service('TimeOutS', function(Muerte,$q){
    console.log('servicio worker');
    
    return{
        muerte: function(data){
            var defer = $q.defer();
            Muerte.send({'cmd': 'muerte'},function(res){
                defer.resolve(res);
            });
            return defer.promise;
        }
    };
});