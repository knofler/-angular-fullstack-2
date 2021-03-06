'use strict';

describe('Directive: invoice', function () {

  // load the directive's module and view
  beforeEach(module('angularFullstack2App'));
  beforeEach(module('app/directive/invoice/invoice.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<invoice></invoice>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the invoice directive');
  }));
});