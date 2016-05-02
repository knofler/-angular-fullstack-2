'use strict';

angular.module('angularFullstack2App')
  .directive('uiAbout', function () {
    return {
      templateUrl: 'app/directive/uidir/ui-about/ui-about.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });