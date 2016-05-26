'use strict';

angular.module('angularFullstack2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('d3_ctrl', {
        url: '/d3_ctrl',
        template: '<d-3-ctrl></d-3-ctrl>'
      });
  });
