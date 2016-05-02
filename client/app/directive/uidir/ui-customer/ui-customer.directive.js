'use strict';

angular.module('angularFullstack2App')
  .directive('uiCustomer', function () {
    return {
      templateUrl: 'app/directive/uidir/ui-customer/ui-customer.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });