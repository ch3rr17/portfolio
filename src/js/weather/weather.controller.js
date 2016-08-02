(function() {
    'use strict';

    angular
        .module('app')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = ['$log', 'toastr', 'WeatherFactory'];

    /* @ngInject */
    function WeatherController($log, toastr, WeatherFactory) {
        var vm = this;
        vm.title = 'WeatherController';

        vm.search = [];

        vm.getWeather = function(cityName) {
            WeatherFactory.weatherSearch(cityName)
                .then(
                    function(response) {
                        vm.weather = response.data;
                        vm.city = {name: cityName};
                        vm.city.time = moment().format('YYYY-MM-DD h:mm:ss a');
                        vm.search.push(vm.city);
                    },
                    function(error) {
                        $log.error('failure getting weather', error);
                    });
        }

        vm.getWeather('San Diego');
    }
})();
