'use strict';

angular.module('angularFullstack2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('accounting_ctrl', {
        url: '/accounting_ctrl',
        template: '<accounting-ctrl></accounting-ctrl>'
      });
  });
