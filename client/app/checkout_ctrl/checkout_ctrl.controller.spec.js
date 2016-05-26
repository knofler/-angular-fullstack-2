'use strict';

describe('Component: CheckoutCtrlComponent', function () {

  // load the controller's module
  beforeEach(module('angularFullstack2App'));

  var CheckoutCtrlComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CheckoutCtrlComponent = $componentController('CheckoutCtrlComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
