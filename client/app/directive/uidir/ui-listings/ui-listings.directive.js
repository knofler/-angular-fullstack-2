'use strict';

angular.module('angularFullstack2App')
  .directive('uiListings', function () {
    return {
      templateUrl: 'app/directive/uidir/ui-listings/ui-listings.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });