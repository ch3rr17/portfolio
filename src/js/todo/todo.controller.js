(function() {
    'use strict';

    angular
        .module('app')
        .controller('ToDoController', ToDoController);

    ToDoController.$inject = [];

    /* @ngInject */
    function ToDoController() {
        var vm = this;
        vm.title = 'ToDoController';

        vm.items = [];
        //vm.newItem = '';
        

        vm.addItem = function(){
        	vm.items.push({
        		'text': vm.newItem,
        		'priority': vm.itemColor
        	});

        	
        	console.log(vm.items);
            console.log(vm.newItem);
        };

       

        vm.delete = function(index){
        	vm.items.splice(index,1);
        };

        vm.predicate = 'text';
        vm.reverse = true;

        vm.setOrder = function(predicate){
        	vm.reverse = (vm.predicate === predicate) ? !vm.reverse : false;
        	vm.predicate = predicate;
        };

        vm.sortItems = function(order){
        	vm.items = $filter('orderBy')(vm.items,order);
        };
    }
})();