'use strict';

describe('Component: ChatCtrlComponent', function () {

  // load the controller's module
  beforeEach(module('angularFullstack2App'));

  var ChatCtrlComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ChatCtrlComponent = $componentController('ChatCtrlComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
