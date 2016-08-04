(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProjectController', ProjectController);

    ProjectController.$inject = [];

    /* @ngInject */
    function ProjectController() {
        var vm = this;
        vm.title = 'ProjectController';

        vm.showProjectList = false;
    }
})();