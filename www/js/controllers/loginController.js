angular.module('bioimpedancia.loginController', [])

.controller('LoginController', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};

    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.dash');
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