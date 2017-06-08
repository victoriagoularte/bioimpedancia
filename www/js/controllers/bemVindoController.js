angular.module('bioimpedancia.bemVindoController', [])

.controller('BemVindoController', function($scope, $state, $http) {

  const URI = 'http://homol.redes.unb.br/uiot-raise/'
  const CLIENT_REGISTER = '/client/register/'

  $scope.$on('$ionicView.loaded', function () {
    checkRaise();
  });

  $scope.goToCadastrar = function() {
    $state.go('slide');
  }
  
  $scope.goToLogin = function() {
    $state.go('login');
  }

  function checkRaise() {
    $http({
        method : "POST",
        url : URI + CLIENT_REGISTER,
        headers: {
          "name": "",
          "chipset": "",
          "mac": "00:db:df:07:6d:13",
          "serial": "",
          "processor": "",
          "channel": "",
          "client_time": 0,
          "tag": [
            
          ]
        }
    }).then(function mySuccess(response) {
        $scope.raiseResponse = response.data;
        console.log($scope.raiseResponse)
    }, function myError(response) {
        $scope.raiseResponse = response.statusText;
        console.log($scope.raiseResponse)
    });
  }

})