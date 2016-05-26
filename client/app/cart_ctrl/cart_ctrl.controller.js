'use strict';
(function(){

class CartCtrlComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('angularFullstack2App')
  .component('cartCtrl', {
    templateUrl: 'app/cart_ctrl/cart_ctrl.html',
    controller: CartCtrlComponent
  });

})();
