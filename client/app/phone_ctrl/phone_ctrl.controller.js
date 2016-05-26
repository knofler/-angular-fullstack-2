'use strict';
(function(){

class PhoneCtrlComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('angularFullstack2App')
  .component('phoneCtrl', {
    templateUrl: 'app/phone_ctrl/phone_ctrl.html',
    controller: PhoneCtrlComponent
  });

})();
