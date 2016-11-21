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

        //Holds the city search entered by user
        vm.search = [];
        vm.moreInfo = false;


        //Grabs current info entered by the user then reaches out to the Weather Factory
        //which provides the information back to the Weather Controller
        vm.getWeather = function(cityName) {
            WeatherFactory.weatherSearch(cityName)
                .then(
                    function(response) {
                        vm.weather = response.data;
                        vm.city = {name: cityName};
                        vm.city.time = moment().format('M/D/YY @ h:mm a');
                        vm.search.push({
                            'cityName': vm.city.name,
                            'time': vm.city.time
                        });
                        console.log(vm.search);
                        vm.city.name = '';
                    },
                    function(error) {
                        $log.error('failure getting weather', error);
                    });
        }

        vm.getWeather('San Diego');
    }
})();
