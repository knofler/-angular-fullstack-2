'use strict';

angular.module('angularFullstack2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('elasticsearch_ctrl', {
        url: '/elasticsearch_ctrl',
        template: '<elasticsearch-ctrl></elasticsearch-ctrl>'
      });
  });
