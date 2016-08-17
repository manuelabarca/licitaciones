/**
 * Created by Manuel Labarca
 */

var app = angular.module('licitacionesMercado', []);

app.controller('licitaciones_all', function($scope, $http){
    $scope.fechaActual = new Date();
    var mes = $scope.fechaActual.getMonth()+1;
    var NMes;
    switch(mes){
        case 1: NMes = "01";
            break;
        case 2: NMes = "02";
            break;
        case 3: NMes = "03";
            break;
        case 4: NMes = "04";
            break;
        case 5: NMes = "05";
            break;
        case 6: NMes = "06";
            break;
        case 7: NMes = "07";
            break;
        case 8: NMes = "08";
            break;
        case 9: NMes = "09";
            break;
        default: "Este mes no necesita formateo, o no es un mes valido.";
            break;
    }
    $http.get("http://api.mercadopublico.cl/servicios/v1/publico/licitaciones.json?fecha="+$scope.fechaActual.getDate()+NMes+$scope.fechaActual.getFullYear()+"&ticket=EB9BA9FD-B1DA-4C27-B78D-7A095969577B").then(function (res) {
        $scope.licitacion = res.data;
        console.log(res.data);

    });
});
