'use strict';

angular.module('angularFullstack2App')
  .directive('uiDivider1', function () {
    return {
      templateUrl: 'app/directive/uidir/ui-divider-1/ui-divider-1.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });