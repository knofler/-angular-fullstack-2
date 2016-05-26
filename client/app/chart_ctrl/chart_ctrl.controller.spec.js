'use strict';

describe('Component: ChartCtrlComponent', function () {

  // load the controller's module
  beforeEach(module('angularFullstack2App'));

  var ChartCtrlComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ChartCtrlComponent = $componentController('ChartCtrlComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
