'use strict';
(function(){

class RxComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('angularFullstack2App')
  .component('rx', {
    templateUrl: 'app/rx/rx.html',
    controller: RxComponent
  });

})();
