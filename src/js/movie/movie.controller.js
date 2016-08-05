(function() {
    'use strict';

    angular
        .module('app')
        .controller('MovieFinderController', MovieFinderController);

    MovieFinderController.$inject = ['$log', 'MovieFactory'];

    /* @ngInject */
    function MovieFinderController($log, MovieFactory) {
        var vm = this;
        vm.title = 'MovieFinderController';
        vm.movie = '';


        vm.searchMovie = function() {
            var search = "http://www.omdbapi.com/?s=";
            var url = search + vm.movie;
            MovieFactory.movieSearch(url).then(
                function(response) {
                    vm.movies = response.data;
                    console.log(vm.movies);
                },
                function(error) {
                    $log.error('failure getting movies', error);
                });
        }; // end of searchMovie function

        vm.searchMovie();

    } //end of controller
})();
