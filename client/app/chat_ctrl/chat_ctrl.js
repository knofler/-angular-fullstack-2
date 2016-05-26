'use strict';

angular.module('angularFullstack2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('chat_ctrl', {
        url: '/chat_ctrl',
        template: '<chat-ctrl></chat-ctrl>'
      });
  });
