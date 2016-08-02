(function() {
    'use strict';

    angular
        .module('app')
        .controller('ChangeController', ChangeController);

    ChangeController.$inject = [];

    /* @ngInject */
    function ChangeController() {
        var vm = this;
        vm.title = 'ChangeController';


        vm.calc = function() {
            vm.change = vm.custPayment - vm.total;
            vm.dollars = Math.floor((vm.change * 100) / 100);
            vm.returnD = (vm.change * 100) % 100;
            vm.quarters = Math.floor(vm.returnD / 25);
            vm.returnQ = vm.returnD % 25;
            vm.dimes = Math.floor(vm.returnQ / 10);
            vm.returnDi = vm.returnQ % 10;
            vm.nickels = Math.floor(vm.returnDi / 5);
            vm.pennies = Math.round(vm.returnDi % 5);
            vm.result = true;
        };

    }
})();
