'use strict';
(function(){

class CheckoutCtrlComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('angularFullstack2App')
  .component('checkoutCtrl', {
    templateUrl: 'app/checkout_ctrl/checkout_ctrl.html',
    controller: CheckoutCtrlComponent
  });

})();
