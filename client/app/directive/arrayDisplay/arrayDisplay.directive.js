'use strict';

angular.module('angularFullstack2App')
  .directive('arrayDisplay', function () {
    return {
      templateUrl: 'app/directive/arrayDisplay/arrayDisplay.html',
      restrict: 'EA',
      scope:{
      	datamodel:'='
      },
      link: function (scope, element, attrs) {
      }
    };
  });