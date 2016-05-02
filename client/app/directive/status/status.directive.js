'use strict';

angular.module('angularFullstack2App')
  .directive('status', function () {
    return {
      templateUrl: 'app/directive/status/status.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });