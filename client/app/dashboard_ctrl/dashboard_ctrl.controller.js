'use strict';
(function(){

class DashboardCtrlComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('angularFullstack2App')
  .component('dashboardCtrl', {
    templateUrl: 'app/dashboard_ctrl/dashboard_ctrl.html',
    controller: DashboardCtrlComponent
  });

})();
