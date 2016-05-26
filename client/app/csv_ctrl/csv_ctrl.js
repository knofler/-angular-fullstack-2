'use strict';

angular.module('angularFullstack2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('csv_ctrl', {
        url: '/csv_ctrl',
        template: '<csv-ctrl></csv-ctrl>'
      });
  });
