'use strict';

angular.module('angularFullstack2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('forms_ctrl', {
        url: '/forms_ctrl',
        template: '<forms-ctrl></forms-ctrl>'
      });
  });
