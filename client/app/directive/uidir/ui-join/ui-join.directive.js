'use strict';

angular.module('angularFullstack2App')
  .directive('uiJoin', function () {
    return {
      templateUrl: 'app/directive/uidir/ui-join/ui-join.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });