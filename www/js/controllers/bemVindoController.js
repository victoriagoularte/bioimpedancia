angular.module('bioimpedancia.bemVindoController', [])

.controller('BemVindoController', function($scope, $state) {

  $scope.goToCadastrar = function() {
    $state.go('slide');
  }
  $scope.goToLogin = function() {
    $state.go('login');
  }
})