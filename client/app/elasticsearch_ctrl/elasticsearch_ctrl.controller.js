'use strict';
(function(){

class ElasticsearchCtrlComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('angularFullstack2App')
  .component('elasticsearchCtrl', {
    templateUrl: 'app/elasticsearch_ctrl/elasticsearch_ctrl.html',
    controller: ElasticsearchCtrlComponent
  });

})();
