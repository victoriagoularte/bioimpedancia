angular.module('bioimpedancia.formularioController', [])

.controller('FormularioController', function($scope, $state) {

  $scope.sexos = [{id: '0', tipo: 'Feminino'}, {id: '1', tipo: 'Masculino'}];
  $scope.sexo = $scope.sexos[1];

  $scope.informacoes = {
    altura: '',
    peso: '',
    idade: ''
  }

  $scope.goToCadastrar = function() {
    calculo();
    $state.go('tab.resultado');
  }

  $scope.alterouSexo = function() {
    console.log($scope.sexo);
  }

  function calculo() {
    
    console.log($scope.informacoes)

    var resistencia = 1;
    var bodyDensity = 1.1554 - (0.0841 * $scope.informacoes.peso * (resistencia/($scope.informacoes.altura * $scope.informacoes.altura)));
    var fatMass = ((4.95/(bodyDensity - 4.5))) * 100;
    var ffm = $scope.informacoes.peso - fatMass;

    console.log(bodyDensity);
    console.log(fatMass);
    console.log(ffm);

  }
  
  

})