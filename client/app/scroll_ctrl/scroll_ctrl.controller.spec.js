'use strict';

describe('Component: ScrollCtrlComponent', function () {

  // load the controller's module
  beforeEach(module('angularFullstack2App'));

  var ScrollCtrlComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ScrollCtrlComponent = $componentController('ScrollCtrlComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
