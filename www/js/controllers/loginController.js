angular.module('bioimpedancia.loginController', [])

.controller('LoginController', function($scope, LoginService, $ionicPopup, $state, $ionicHistory) {
    $scope.data = {username: "", password: ""};

    $scope.login = function(name, pw) {
        LoginService.loginUser(name, pw).success(function(data) {
            $state.go('tab.resultado');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'ATENÇÃO!',
                cssClass: 'popup-login',
                template: '<p class="font-gray text-center tam16"> Verifique se o usuário e senha estão corretos. </p>'
            });
        });
    }

    $scope.voltar = function() {
        $ionicHistory.goBack();
    }
})