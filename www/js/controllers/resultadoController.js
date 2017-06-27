angular.module('bioimpedancia.resultadoController', [])

.controller('ResultadoController', function($scope, $state, $location, resultadoService) {

    $scope.resultado = 'resultado = ' + resultadoService.dataObj.bodyDensity

})    