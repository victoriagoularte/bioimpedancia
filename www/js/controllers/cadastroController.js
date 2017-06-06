angular.module('bioimpedancia.cadastroController', [])

.controller('CadastroController', function($scope, $state) {

  $scope.goToResultado = function() {
    $state.go('tab.resultado');
  }

})