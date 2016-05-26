'use strict';

angular.module('angularFullstack2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('poll_ctrl', {
        url: '/poll_ctrl',
        template: '<poll-ctrl></poll-ctrl>'
      });
  });
