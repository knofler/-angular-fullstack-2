'use strict';

angular.module('angularFullstack2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('chart_ctrl', {
        url: '/chart_ctrl',
        template: '<chart-ctrl></chart-ctrl>'
      });
  });
