'use strict';

describe('Component: ElasticsearchCtrlComponent', function () {

  // load the controller's module
  beforeEach(module('angularFullstack2App'));

  var ElasticsearchCtrlComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ElasticsearchCtrlComponent = $componentController('ElasticsearchCtrlComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
