'use strict';

angular.module('angularFullstack2App')
  .directive('timeline', function () {
    return {
      templateUrl: 'app/directive/timeline/timeline.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });