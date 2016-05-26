'use strict';

angular.module('angularFullstack2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('scroll_ctrl', {
        url: '/scroll_ctrl',
        template: '<scroll-ctrl></scroll-ctrl>'
      });
  });
