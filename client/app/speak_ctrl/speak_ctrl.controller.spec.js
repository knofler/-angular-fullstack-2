'use strict';

describe('Component: SpeakCtrlComponent', function () {

  // load the controller's module
  beforeEach(module('angularFullstack2App'));

  var SpeakCtrlComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    SpeakCtrlComponent = $componentController('SpeakCtrlComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
