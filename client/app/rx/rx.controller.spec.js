'use strict';

describe('Component: RxComponent', function () {

  // load the controller's module
  beforeEach(module('angularFullstack2App'));

  var RxComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    RxComponent = $componentController('RxComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
