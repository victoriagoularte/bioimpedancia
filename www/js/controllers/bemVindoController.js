angular.module('bioimpedancia.bemVindoController', [])

  .controller('BemVindoController', function ($scope, $state, $http) {

    const URI = 'http://homol.redes.unb.br/uiot-raise/';
    const CLIENT_REGISTER = 'client/register/';
    const SERVICE_LIST = 'service/list/';
    const DATA_LIST = 'data/list/';

    $scope.tokenId = "";

    $scope.$on('$ionicView.loaded', function () {
      $scope.raiseClientRegister();
    });

    $scope.goToCadastrar = function () {
      $state.go('slide');
    }

    $scope.goToLogin = function () {
      $state.go('login');
    }

    $scope.raiseClientRegister = function () {
      $http.post(URI + CLIENT_REGISTER, {
        "name": "BIA-App",
        "chipset": "Apple A10 Fusion",
        "mac": "00:db:df:07:6d:13",
        "serial": "X0XX0X00X0X0",
        "processor": "Arm A10",
        "channel": "Wi-Fi",
        "client_time": 1315584200,
        "tag": [

        ]
      }).success(function mySuccess(response) {
        $scope.raiseResponse = response.message;
        console.log($scope.raiseResponse);
        $scope.tokenId = response.tokenId;
        $scope.raiseServiceList();
      }).error(function myError(data, status) {
        $scope.raiseResponse = data;
        console.log($scope.raiseResponse);
      });
    };

    $scope.raiseServiceList = function () {
      // param service_name not working
      $scope.list = [];
      $http.get(URI + SERVICE_LIST + '?tokenId=' + $scope.tokenId)
        .success(function (response) {
          $scope.raiseResponse = response;
          angular.forEach($scope.raiseResponse.values, function (elem, index) {
            var services = [];
            var getService;
            if (elem.services != null) {
              services = elem.services;
              getService = services.filter((service) => service.name === "GValues_M")[0];
              if(getService != null){
                $scope.list.push(getService);
              }
            }
          });
          $scope.service = $scope.list.sort(function (a, b) { return b.service_id - a.service_id; })[0];
        });
    };

  })
