(function () {
  'use strict';

  angular
    .module('app')
    .run(['$anchorScroll', function ($anchorScroll) {
      $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
    }])
    .controller('CreationsController', CreationsController);

  CreationsController.$inject = ['$timeout', '$scope', '$anchorScroll', '$location'];

  /* @ngInject */
  function CreationsController($timeout, $scope, $anchorScroll, $location) {
    var vm = this;
    vm.title = 'CreationsController';

    // photography slideshow
    var slidesInSlideshow = 4; // sets max slideshow to 4
    var slidesTimeIntervalInMs = 5000; //sets slider timeout to 5 ms
    $scope.slideshow = 1; // slideshow starts at slide1
    // slideshow function to play slides
    var slideTimer = $timeout(function interval() {
      $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
      slideTimer = $timeout(interval, slidesTimeIntervalInMs);
    }, slidesTimeIntervalInMs);

    // anchor function
    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
      // Remove hash
    $location.hash('');
    $location.replace();
    };
  }
})();


