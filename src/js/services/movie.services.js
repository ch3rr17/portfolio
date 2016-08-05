(function() {
    'use strict';

    angular
        .module('app')
        .factory('MovieFactory', MovieFactory); // https://docs.angularjs.org/guide/services

    MovieFactory.$inject = ['$http', '$q', '$log', '$stateParams']; // https://github.com/johnpapa/angular-styleguide/tree/master/a1#manual-annotating-for-dependency-injection

    /* @ngInject */
    function MovieFactory($http, $q, $log, $stateParams) {

        var service = {
            movieSearch: movieSearch,
            specificSearch: specificSearch
        };

        return service;

        function movieSearch(url) {
    
            var defer = $q.defer();

            //var url = 'http://www.omdbapi.com';
            console.log('Movie Title is:',  url );

            $http({
                    method: "GET",
                    url: url                  
                }) 
                .then(
                    function(response) {
                        if (typeof response.data === 'object') {
                            defer.resolve(response);
                            toastr.success('We have movies!');

                        } else {
                            defer.reject(response);
                            toastr.warning('no movie found<br/>' + response.config.url);

                        }
                    },
                    // failure
                    function(error) {
                        defer.reject(error);
                        $log.error(error);
                        toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
                    });

            return defer.promise;
        }// end of movieSearch function


        function specificSearch(url) {
    
            var defer = $q.defer();

            //var url = 'http://www.omdbapi.com' + movie + id;
            console.log('Movie Title is:', url);

            $http({
                    method: "GET",
                    url: url
                  
                }) 
                .then(
                    function(response) {
                        if (typeof response.data === 'object') {
                            defer.resolve(response);
                            toastr.success('We have movies!');

                        } else {
                            defer.reject(response);
                            toastr.warning('no movie found<br/>' + response.config.url);

                        }
                    },
                    // failure
                    function(error) {
                        defer.reject(error);
                        $log.error(error);
                        toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
                    });

            return defer.promise;
        }




    }
})();
