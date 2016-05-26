'use strict';
(function(){

class ChatCtrlComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('angularFullstack2App')
  .component('chatCtrl', {
    templateUrl: 'app/chat_ctrl/chat_ctrl.html',
    controller: ChatCtrlComponent
  });

})();
