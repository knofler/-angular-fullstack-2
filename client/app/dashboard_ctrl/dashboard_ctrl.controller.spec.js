'use strict';

describe('Component: DashboardCtrlComponent', function () {

  // load the controller's module
  beforeEach(module('angularFullstack2App'));

  var DashboardCtrlComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    DashboardCtrlComponent = $componentController('DashboardCtrlComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
