'use strict';

describe('Component: CsvCtrlComponent', function () {

  // load the controller's module
  beforeEach(module('angularFullstack2App'));

  var CsvCtrlComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CsvCtrlComponent = $componentController('CsvCtrlComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
