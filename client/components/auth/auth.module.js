'use strict';

angular.module('angularFullstack2App.auth', [
  'angularFullstack2App.constants',
  'angularFullstack2App.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
