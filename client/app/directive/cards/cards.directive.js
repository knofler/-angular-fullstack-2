'use strict';

angular.module('angularFullstack2App')
  .directive('cards', function () {
    return {
      templateUrl: 'app/directive/cards/cards.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });