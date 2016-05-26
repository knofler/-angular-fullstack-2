'use strict';

describe('Component: AccountingCtrlComponent', function () {

  // load the controller's module
  beforeEach(module('angularFullstack2App'));

  var AccountingCtrlComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    AccountingCtrlComponent = $componentController('AccountingCtrlComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
