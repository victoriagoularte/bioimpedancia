angular.module('bioimpedancia.formularioController', [])

.controller('FormularioController', function($scope, $state) {

  $scope.sexos = [{id: '0', tipo: 'Feminino'}, {id: '1', tipo: 'Masculino'}];
  $scope.sexo = $scope.sexos[1];

  $scope.goToCadastrar = function() {
    calculo();
    $state.go('tab.resultado');
  }

  $scope.alterouSexo = function() {
    console.log($scope.sexo);
  }

  function calculo() {
    var dados_pessoais_paciente = $scope.dadosPessoais;
    var informacoes_paciente = $scope.informacoes;
    var peso = informacoes_paciente.peso;
    var altura = informacoes_paciente.altura;
    var resistencia = informacoes_paciente.resistencia;
    var bodyDensity = 1.1554 - (0.0841 * peso * (resistencia/(altura * altura)));
    var fatMass = ((4.95/(bodyDensity - 4.5))) * 100;
    var ffm = peso - fatMass;


  
    console.log(bodyDensity);
    console.log(fatMass);
    console.log(ffm);
    console.log(informacoes_paciente);
    console.log(informacoes_paciente);

  }
  
  

})