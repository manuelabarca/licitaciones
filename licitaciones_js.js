/**
 * Created by Manuel Labarca
 */


var app = angular.module('licitacionesMercado', []);

licitacionesMercado.controller('licitaciones_all', function($scope, $http){
    $scope.fechaActual = new Date();

    $http.get("http://link/licitaciones.json?fecha="+$scope.fechaActual+"&ticket=EB9BA9FD-B1DA-4C27-B78D-7A095969577B").then(function (res) {
        $scope.licitacion = res.data;
    });
});
