'use strict';

angular.module('angularFullstack2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard_ctrl', {
        url: '/dashboard_ctrl',
        template: '<dashboard-ctrl></dashboard-ctrl>'
      });
  });
