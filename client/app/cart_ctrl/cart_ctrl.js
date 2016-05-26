'use strict';

angular.module('angularFullstack2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cart_ctrl', {
        url: '/cart_ctrl',
        template: '<cart-ctrl></cart-ctrl>'
      });
  });
