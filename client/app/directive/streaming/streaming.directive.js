'use strict';

angular.module('angularFullstack2App')
  .directive('streaming', function () {
    return {
      templateUrl: 'app/directive/streaming/streaming.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });