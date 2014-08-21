//Datos quemados de la app para pruebas de diseno y concepto
angular.module('appalm.factories', [])


.factory('Movimientos', function() {

    var movimientos = [
    {
        id: 0,
        informacion: 'Transaccion de Fulanito desde Medellin',
        concepto: 'Concepto',
        valor: '12000',
        fecha: '08/04/2014'
    },
    {
        id: 1,
        informacion: 'Retiro desde el cajero Unicentro de Medellin',
        concepto: 'Concepto',
        valor: '100000',
        fecha: '16/04/2014'
    },
    {
        id: 2,
        informacion: 'Retiro de dinero del cajero del hospital de Medellin',
        concepto: 'Concepto',
        valor: '60000',
        fecha: '16/04/2014'
    },
    {
        id: 3,
        informacion: 'Transaccion de Fulanito desde Medellin',
        concepto: 'Concepto',
        valor: '42000',
        fecha: '16/05/2014'
    }
  ];

    return {
        all: function() {
            return movimientos;
        },
        get: function(movimientoId) {
            return movimientos[movimientoIdid];
        }
    }
})


.factory('ResumenTransferencia', function() {

    var movimientos = {
        id: 0,
        cuentaOrigen:'1020',
        cuentaDestino: '111-222-111111',
        tipoCuenta: 'Cuenta de Ahorros',
        valorTransferencia: '876.000'
    };

    return {
        all: function() {
            return movimientos;
        },
        get: function(movimientoId) {
            return movimientos[movimientoIdid];
        }
    }
});
