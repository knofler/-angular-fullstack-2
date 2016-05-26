'use strict';

angular.module('angularFullstack2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('display_ctrl', {
        url: '/display_ctrl',
        template: '<display-ctrl></display-ctrl>'
      });
  });
