'use strict';
(function(){

class ChartCtrlComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('angularFullstack2App')
  .component('chartCtrl', {
    templateUrl: 'app/chart_ctrl/chart_ctrl.html',
    controller: ChartCtrlComponent
  });

})();
