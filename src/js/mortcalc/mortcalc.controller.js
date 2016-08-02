(function() {
    'use strict';

    angular
        .module('app')
        .controller('MortgageController', MortgageController);

    //MortgageController.$inject = [];

    /* @ngInject */
    function MortgageController() {
        var vm = this;
        vm.title = 'MortgageController';

        
        vm.calc = function(){
        	vm.numOfPayments = vm.term * vm.period;
        	vm.monthlyInterestRate = (vm.interest / 100) / vm.period;
        	vm.compoundedInterestRate = Math.pow((1 + vm.monthlyInterestRate), vm.numOfPayments);
        	vm.intQuotient = (vm.monthlyInterestRate * vm.compoundedInterestRate) / (vm.compoundedInterestRate - 1);
        	vm.monthlyPayment = Math.round(vm.loan * vm.intQuotient).toFixed(2);
            vm.result = true;
        };
    }
})();