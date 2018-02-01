(function() {
    'use strict';

    angular
        .module('app')
        .factory('WeatherFactory', WeatherFactory);

    WeatherFactory.$inject = ['$http', '$q', '$log', 'toastr'];

    /* @ngInject */
    function WeatherFactory($http, $q, $log, toastr) {
        var service = {
            weatherSearch: weatherSearch
        };
        return service;

        ////////////////

        //Grabs entered info from the Weather Controller then this function
        //talks to the Open Weather API based on the API url and its params.
        //This then will provide the information back to the Weather Controller
        function weatherSearch(city) {
            var defer = $q.defer();
            var url = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather';
            $http({
                method: 'GET',
                url: url,
                params: {
                    q: city,
                    units: 'imperial',
                    appid: '449e9e8cb9237caf839de0f795054053'
                }
            })
            .then(
            	function(response){
                defer.resolve(response);
                console.log('hello world');
                console.log(response);
            		//toastr.success('We have weather');
            	},
            	function (error) {
            		defer.reject(err.data.message);
            		//toastr.warning(response.config.url);
            	}

            );//end of then

            return defer.promise;


        }
    }
})();
