'use strict';
(function(){

class PollCtrlComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('angularFullstack2App')
  .component('pollCtrl', {
    templateUrl: 'app/poll_ctrl/poll_ctrl.html',
    controller: PollCtrlComponent
  });

})();
