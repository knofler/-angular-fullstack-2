'use strict';

angular.module('angularFullstack2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('phone_ctrl', {
        url: '/phone_ctrl',
        template: '<phone-ctrl></phone-ctrl>'
      });
  });
