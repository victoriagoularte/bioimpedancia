angular.module('bioimpedancia.formularioController', [])

.controller('FormularioController', function($scope, $state, $location, resultadoService) {

  $scope.sexos = [{id: '0', tipo: 'Feminino'}, {id: '1', tipo: 'Masculino'}];
  $scope.sexo = $scope.sexos[1];

  $scope.informacoes = {
    altura: '',
    peso: '',
    idade: ''
  }

  $scope.goToCadastrar = function() {
    if($scope.sexo.id == 0) {
      calculoFem();
    } else if($scope.sexo.id == 1) {
      calculoMasc();
    } 
    
    $state.go('tab.resultado');
  }

  $scope.alterouSexo = function() {
    console.log($scope.sexo);
  }

  function calculoMasc() {
    
    console.log($scope.informacoes)

    var resistencia = 578;
    var bodyDensity = 1.1554 - (0.0841 * $scope.informacoes.peso * (resistencia/($scope.informacoes.altura * $scope.informacoes.altura)));
    var fatMass = ((4.95/bodyDensity - 4.5)) * 100;
    var ffm = $scope.informacoes.peso - fatMass;

    resultadoService.dataObj.bodyDensity = bodyDensity;
    resultadoService.dataObj.fatMass = fatMass;
    resultadoService.dataObj.ffm = ffm;

    console.log(bodyDensity);
    console.log(fatMass);
    console.log(ffm);

  }
  
    function calculoFem() {
    
    console.log($scope.informacoes)

    var resistencia = 578;
    var bodyDensity = 1.1554 - (0.0841 * $scope.informacoes.peso * (resistencia/($scope.informacoes.altura * $scope.informacoes.altura)));
    var fatMass = (1 - [0.3981 * (($scope.informacoes.altura * $scope.informacoes.altura)/resistencia) + 0.3066 * $scope.informacoes.peso + 0.095299 * ( $scope.informacoes.peso - 100 ) + 0.7414] / $scope.informacoes.peso) * 100;
    var ffm = $scope.informacoes.peso - fatMass;

    resultadoService.dataObj.bodyDensity = bodyDensity;
    resultadoService.dataObj.fatMass = fatMass;
    resultadoService.dataObj.ffm = ffm;

    console.log(bodyDensity);
    console.log(fatMass);
    console.log(ffm);

  }

})