'use strict';

describe('Component: FormsCtrlComponent', function () {

  // load the controller's module
  beforeEach(module('angularFullstack2App'));

  var FormsCtrlComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    FormsCtrlComponent = $componentController('FormsCtrlComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
