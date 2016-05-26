'use strict';

describe('Component: VideochatCtrlComponent', function () {

  // load the controller's module
  beforeEach(module('angularFullstack2App'));

  var VideochatCtrlComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    VideochatCtrlComponent = $componentController('VideochatCtrlComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
