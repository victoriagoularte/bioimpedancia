angular.module('bioimpedancia.resultadoController', [])

.controller('ResultadoController', function($scope, $state, $location, resultadoService) {

    $scope.$on('$ionicView.loaded', function () {
      //Number(resultadoService.dataObj.bodyDensity.replace(/[^0-9\.]+/g,""))
    });

    $scope.bodyDensity = "" + resultadoService.dataObj.bodyDensity;
    $scope.fatMass = " " + resultadoService.dataObj.fatMass;
    $scope.ffm = " " + resultadoService.dataObj.ffm;

})    