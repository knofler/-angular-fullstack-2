'use strict';

describe('Component: CartCtrlComponent', function () {

  // load the controller's module
  beforeEach(module('angularFullstack2App'));

  var CartCtrlComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CartCtrlComponent = $componentController('CartCtrlComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
