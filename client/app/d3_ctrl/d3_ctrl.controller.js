'use strict';
(function(){

class D3CtrlComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('angularFullstack2App')
  .component('d3Ctrl', {
    templateUrl: 'app/d3_ctrl/d3_ctrl.html',
    controller: D3CtrlComponent
  });

})();
