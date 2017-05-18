// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('bioimpedancia', ['ionic', 'bioimpedancia.controllers', 'bioimpedancia.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('bem-vindo', {
    url: '/bem_vindo',
    templateUrl: 'templates/bem-vindo.html',
    controller: 'BemVindoController'
  })

  .state('formulario', {
    url: '/formulario',
    templateUrl: 'templates/formulario.html',
    controller: 'FormularioController'
  })

  .state('cadastro', {
    url: '/cadastro',
    templateUrl: 'templates/cadastro.html',
    controller: 'CadastroController'
  })
  

  .state('slide', {
    url: '/slide',
    templateUrl: 'templates/slide.html',
    controller: 'SlideController'
  })

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.resultado', {
    url: '/resultado',
    views: {
      'tab-resultado': {
        templateUrl: 'templates/resultado.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.sobre', {
      url: '/sobre',
      views: {
        'tab-sobre': {
          templateUrl: 'templates/sobre.html',
          controller: 'SobreCtrl'
        }
      }
  })

  .state('tab.configuracoes', {
    url: '/configuracoes',
    views: {
      'tab-configuracoes': {
        templateUrl: 'templates/configuracoes.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/bem_vindo');

});
