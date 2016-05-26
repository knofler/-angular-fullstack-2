'use strict';

angular.module('angularFullstack2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('videochat_ctrl', {
        url: '/videochat_ctrl',
        template: '<videochat-ctrl></videochat-ctrl>'
      });
  });
