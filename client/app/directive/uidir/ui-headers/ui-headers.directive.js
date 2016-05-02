'use strict';

angular.module('angularFullstack2App')
  .directive('uiHeaders', function () {
    return {
      templateUrl: 'app/directive/uidir/ui-headers/ui-headers.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });