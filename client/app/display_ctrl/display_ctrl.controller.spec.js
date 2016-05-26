'use strict';

describe('Component: DisplayCtrlComponent', function () {

  // load the controller's module
  beforeEach(module('angularFullstack2App'));

  var DisplayCtrlComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    DisplayCtrlComponent = $componentController('DisplayCtrlComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
