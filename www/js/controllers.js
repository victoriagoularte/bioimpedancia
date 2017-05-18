angular.module('bioimpedancia.controllers', [])

.controller('BemVindoController', function($scope, $state) {

  $scope.goToCadastrar = function() {
    $state.go('slide');
  }

})

.controller('FormularioController', function($scope, $state) {

  $scope.goToCadastrar = function() {
    $state.go('slide');
  }

})


.controller('CadastroController', function($scope, $state) {

  $scope.goToResultado = function() {
    $state.go('tab.resultado');
  }

})

.controller('SlideController', function($scope, $state, $ionicSlideBoxDelegate) {

  $scope.goToResultado = function() {
    $state.go('formulario');
  }

  $scope.goToAvancar = function() {
    $ionicSlideBoxDelegate.next();
  }

  $scope.goToVamosComecar = function() {
    $state.go('formulario');
  }

  $scope.backSlide = function() {
    $ionicSlideBoxDelegate.previous();
  }

  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  }

})

.controller('DashCtrl', function($scope) {})

.controller('SobreCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});


