'use strict';

angular.module('angularFullstack2App')
  .directive('uiSummary', function () {
    return {
      templateUrl: 'app/directive/uidir/ui-summary/ui-summary.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });