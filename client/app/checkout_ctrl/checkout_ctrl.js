'use strict';

angular.module('angularFullstack2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('checkout_ctrl', {
        url: '/checkout_ctrl',
        template: '<checkout-ctrl></checkout-ctrl>'
      });
  });
