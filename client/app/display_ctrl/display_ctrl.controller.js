'use strict';
(function(){

class DisplayCtrlComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('angularFullstack2App')
  .component('displayCtrl', {
    templateUrl: 'app/display_ctrl/display_ctrl.html',
    controller: DisplayCtrlComponent
  });

})();
