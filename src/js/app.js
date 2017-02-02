(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'toastr'
        ])
        .config(function($stateProvider, $urlRouterProvider, $httpProvider) {

            $urlRouterProvider.otherwise('/main');

            //Create state for each page
            $stateProvider.state('main', { url: '/main', templateUrl: 'src/templates/main.html', controller: 'MainController as main' })
                .state('projects', { url: '/projects', templateUrl: 'src/templates/projects.html', controller: 'ProjectController as project' })
                .state('projects.mortgagecalc', { url: '/mortcalc', templateUrl: 'src/templates/mortcalc.html', controller: 'MortgageController as mort' })
                .state('projects.changecalc', { url: '/changecalc', templateUrl: 'src/templates/changecalc.html', controller: 'ChangeController as change' })
                .state('projects.weather', { url: '/weather', templateUrl: 'src/templates/weather.html', controller: 'WeatherController as weather' })
                .state('projects.todo', { url: '/todos', templateUrl: 'src/templates/todo.html', controller: 'ToDoController as todo' })

        })

})();
