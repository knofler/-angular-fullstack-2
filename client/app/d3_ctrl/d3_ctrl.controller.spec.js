'use strict';

describe('Component: D3CtrlComponent', function () {

  // load the controller's module
  beforeEach(module('angularFullstack2App'));

  var D3CtrlComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    D3CtrlComponent = $componentController('D3CtrlComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
