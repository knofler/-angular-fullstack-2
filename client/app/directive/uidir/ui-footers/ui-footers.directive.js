'use strict';

angular.module('angularFullstack2App')
  .directive('uiFooters', function () {
    return {
      templateUrl: 'app/directive/uidir/ui-footers/ui-footers.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });