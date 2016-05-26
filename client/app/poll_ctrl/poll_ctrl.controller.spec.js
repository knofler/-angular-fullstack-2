'use strict';

describe('Component: PollCtrlComponent', function () {

  // load the controller's module
  beforeEach(module('angularFullstack2App'));

  var PollCtrlComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PollCtrlComponent = $componentController('PollCtrlComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
