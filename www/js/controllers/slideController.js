angular.module('bioimpedancia.slideController', [])

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
