angular.module('bioimpedancia.loginController', [])

.controller('LoginController', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {username: "", password: ""};

    $scope.login = function(name, pw) {
        LoginService.loginUser(name, pw).success(function(data) {
            $state.go('tab.resultado');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'ATENÇÃO!',
                cssClass: 'popup-login',
                template: 'Verifique se login ou senha estão corretos.',
                templateUrl: '../../templates/popup-login.html'
            });
        });
    }
})