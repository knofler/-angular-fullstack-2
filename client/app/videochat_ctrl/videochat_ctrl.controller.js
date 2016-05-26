'use strict';
(function(){

class VideochatCtrlComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('angularFullstack2App')
  .component('videochatCtrl', {
    templateUrl: 'app/videochat_ctrl/videochat_ctrl.html',
    controller: VideochatCtrlComponent
  });

})();
