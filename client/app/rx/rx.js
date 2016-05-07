'use strict';

angular.module('angularFullstack2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('rx', {
        url: '/rx',
        template: '<rx></rx>'
      });
  });
