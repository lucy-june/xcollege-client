angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.page2', {
    url: '/scene',
    views: {
      'tab3': {
        templateUrl: 'templates/page2.html',
        controller: 'page2Ctrl'
      }
    }
  })

  .state('tabsController.page3', {
    url: '/question',
    views: {
      'tab2': {
        templateUrl: 'templates/page3.html',
        controller: 'page3Ctrl'
      }
    }
  })

  .state('tabsController.page4', {
    url: '/history',
    views: {
      'tab1': {
        templateUrl: 'templates/page4.html',
        controller: 'page4Ctrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('page6', {
    url: '/login',
    templateUrl: 'templates/page6.html',
    controller: 'page6Ctrl'
  })

  .state('page7', {
    url: '/logout',
    templateUrl: 'templates/page7.html',
    controller: 'page7Ctrl'
  })

  .state('tabsController.page8', {
    url: '/answer/:id',
    views: {
      'tab2': {
        templateUrl: 'templates/page8.html',
        controller: 'page8Ctrl'
      }
    }
  })

  .state('page9', {
    url: '/report',
    templateUrl: 'templates/page9.html',
    controller: 'page9Ctrl'
  })

  .state('page10', {
    url: '/about',
    templateUrl: 'templates/page10.html',
    controller: 'page10Ctrl'
  })

  .state('page11', {
    url: '/home',
    templateUrl: 'templates/page11.html',
    controller: 'page11Ctrl'
  })

$urlRouterProvider.otherwise('/login')

  

});