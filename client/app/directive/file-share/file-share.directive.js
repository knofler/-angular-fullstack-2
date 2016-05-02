'use strict';

angular.module('angularFullstack2App')
  .directive('fileShare', function () {
    return {
      templateUrl: 'app/directive/file-share/file-share.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });