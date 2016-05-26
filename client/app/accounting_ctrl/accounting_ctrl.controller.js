'use strict';
(function(){

class AccountingCtrlComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('angularFullstack2App')
  .component('accountingCtrl', {
    templateUrl: 'app/accounting_ctrl/accounting_ctrl.html',
    controller: AccountingCtrlComponent
  });

})();
