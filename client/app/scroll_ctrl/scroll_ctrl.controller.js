'use strict';
(function(){

class ScrollCtrlComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('angularFullstack2App')
  .component('scrollCtrl', {
    templateUrl: 'app/scroll_ctrl/scroll_ctrl.html',
    controller: ScrollCtrlComponent
  });

})();
