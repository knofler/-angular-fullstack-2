'use strict';

angular.module('angularFullstack2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('speak_ctrl', {
        url: '/speak_ctrl',
        template: '<speak-ctrl></speak-ctrl>'
      });
  });
