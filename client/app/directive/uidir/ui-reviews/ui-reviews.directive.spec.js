'use strict';

describe('Directive: uiReviews', function () {

  // load the directive's module and view
  beforeEach(module('angularFullstack2App'));
  beforeEach(module('app/directive/uidir/ui-reviews/ui-reviews.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ui-reviews></ui-reviews>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the uiReviews directive');
  }));
});