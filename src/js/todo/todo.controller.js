(function() {
    'use strict';

    angular
        .module('app')
        .controller('ToDoController', ToDoController);

    ToDoController.$inject = ['$filter'];

    /* @ngInject */
    function ToDoController($filter) {
        var vm = this;
        vm.title = 'ToDoController';

        //Holds current list of ToDos
        vm.items = [];

        //Adds a new item to the list
        vm.toDoAdd = function() {
            vm.items.push({
                'text': vm.addItem,
                'priority': vm.itemColor
            });
            vm.addItem = '';
        };

        //Deletes an item
        vm.delete = function(index) {
            vm.items.splice(index, 1);
        };

        //Sort Items
        vm.sortItems = function(order) {
            vm.items = $filter('orderBy')(vm.items, order);
        };
    }
})();
