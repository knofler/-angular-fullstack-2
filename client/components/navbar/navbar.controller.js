'use strict';

class NavbarController {
  //start-non-standard
  menu  = [
      // {'title': 'Home','link': '/'},
      {'title': 'RXJS','link':'/rx','popMsg':'RX','acl':'user'},
      {'title': 'Accounting','link':'/accounting','popMsg':'Accounting','acl':'user'},
      {'title': 'Display','link':'/display','popMsg':'Display','acl':'user'},
      {'title': 'Chart','link':'/chart','popMsg':'Chart','acl':'user'},
      {'title': 'CSV','link':'/csv','popMsg':'CSV','acl':'user'},
      {'title': 'D3','link':'/d3','popMsg':'D3','acl':'user'},
      {'title': 'Poll','link':'/poll','popMsg':'Poll','acl':'user'},
      {'title': 'ElasticSearch','link':'/elastic','popMsg':'Elastic Search','acl':'user'},
      {'title': 'Dashboard','link':'/dashboard','popMsg':'Dashboard','acl':'user'},
      {'title': 'Chat','link':'/chat','popMsg':'Chat','acl':'user'},
      {'title': 'VideoChat','link':'/videochat','popMsg':'Video Chat','acl':'user'},
      {'title': 'Phones','link':'/phones','popMsg':'Phones','acl':'user'},
      {'title': 'Speak','link':'/speak','popMsg':'Speak','acl':'user'},
      {'title': 'Scroll','link':'/scroll','popMsg':'Scroll','acl':'user'},
      {'title': 'Forms','link':'/forms','popMsg':'Forms','acl':'user'},
      {'title': 'Cart','link':'/cart','popMsg':'Cart','acl':'user'},
      {'title': 'Checkout','link':'/checkout','popMsg':'Checkout','acl':'user'}
      ];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('angularFullstack2App')
  .controller('NavbarController', NavbarController);
