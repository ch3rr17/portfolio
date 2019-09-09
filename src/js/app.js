(function () {
  'use strict';

  angular
    .module('app', [
      'ui.router',
      'toastr'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

      $urlRouterProvider.otherwise('/main');

      //Create state for each page
      $stateProvider.state('main', {
        url: '/main',
        templateUrl: 'src/templates/main.html',
        controller: 'MainController as main'
      })
        .state('projects', {
          url: '/projects',
          templateUrl: 'src/templates/projects.html',
          controller: 'ProjectController as project'
        })
        .state('mortgagecalc', {
          url: '/mortcalc',
          templateUrl: 'src/templates/mortcalc.html',
          controller: 'MortgageController as mort'
        })
        .state('changecalc', {
          url: '/changecalc',
          templateUrl: 'src/templates/changecalc.html',
          controller: 'ChangeController as change'
        })
        .state('weather', {
          url: '/weather',
          templateUrl: 'src/templates/weather.html',
          controller: 'WeatherController as weather'
        })
        .state('todo', {
          url: '/todos',
          templateUrl: 'src/templates/todo.html',
          controller: 'ToDoController as todo'
        })
        .state('belch', {
          url: '/belch',
          templateUrl: 'src/templates/belch.html'
        })
        .state('mood', {
          url: '/mood',
          templateUrl: 'src/templates/mood.html'
        })
        .state('creations', {
          url: '/creations',
          templateUrl: 'src/templates/creations.html',
          controller: 'CreationsController as creation'
        })
        .state('bindue', {
          url: '/bindue',
          templateUrl: 'src/templates/bindue.html'
        })
        .state('dingnow', {
          url: '/dingnow',
          templateUrl: 'src/templates/dingnow.html'
        })

        .state('pokemon', {
          url: '/pokemon',
          templateUrl: 'src/templates/pokemon.html',
        })

    })

})();
