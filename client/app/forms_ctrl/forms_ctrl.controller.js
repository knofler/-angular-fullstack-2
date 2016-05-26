'use strict';
(function(){

class FormsCtrlComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('angularFullstack2App')
  .component('formsCtrl', {
    templateUrl: 'app/forms_ctrl/forms_ctrl.html',
    controller: FormsCtrlComponent
  });

})();
