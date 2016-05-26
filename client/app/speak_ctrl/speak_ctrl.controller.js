'use strict';
(function(){

class SpeakCtrlComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('angularFullstack2App')
  .component('speakCtrl', {
    templateUrl: 'app/speak_ctrl/speak_ctrl.html',
    controller: SpeakCtrlComponent
  });

})();
