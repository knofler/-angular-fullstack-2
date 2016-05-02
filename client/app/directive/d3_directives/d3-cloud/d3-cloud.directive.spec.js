'use strict';

describe('Directive: d3Cloud', function () {

  // load the directive's module and view
  beforeEach(module('angularFullstack2App'));
  beforeEach(module('app/directive/d3_directives/d3-cloud/d3-cloud.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<d3-cloud></d3-cloud>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the d3Cloud directive');
  }));
});