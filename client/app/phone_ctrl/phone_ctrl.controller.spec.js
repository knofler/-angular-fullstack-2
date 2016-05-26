'use strict';

describe('Component: PhoneCtrlComponent', function () {

  // load the controller's module
  beforeEach(module('angularFullstack2App'));

  var PhoneCtrlComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PhoneCtrlComponent = $componentController('PhoneCtrlComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
