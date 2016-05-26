'use strict';

class NavbarController {
  //start-non-standard
  menu  = [
      // {'title': 'Home','link': '/'},
      {'title': 'RXJS','link':'/rx','popMsg':'RX','acl':'user'},
      {'title': 'Accounting','link':'/accounting_ctrl','popMsg':'Accounting','acl':'user'},
      {'title': 'Display','link':'/display_ctrl','popMsg':'Display','acl':'user'},
      {'title': 'Chart','link':'/chart_ctrl','popMsg':'Chart','acl':'user'},
      {'title': 'CSV','link':'/csv_ctrl','popMsg':'CSV','acl':'user'},
      {'title': 'D3','link':'/d3_ctrl','popMsg':'D3','acl':'user'},
      {'title': 'Poll','link':'/poll_ctrl','popMsg':'Poll','acl':'user'},
      {'title': 'ElasticSearch','link':'/elasticsearch_ctrl','popMsg':'Elastic Search','acl':'user'},
      {'title': 'Dashboard','link':'/dashboard_ctrl','popMsg':'Dashboard','acl':'user'},
      {'title': 'Chat','link':'/chat_ctrl','popMsg':'Chat','acl':'user'},
      {'title': 'VideoChat','link':'/videochat_ctrl','popMsg':'Video Chat','acl':'user'},
      {'title': 'Phones','link':'/phone_ctrl','popMsg':'Phones','acl':'user'},
      {'title': 'Speak','link':'/speak_ctrl','popMsg':'Speak','acl':'user'},
      {'title': 'Scroll','link':'/scroll_ctrl','popMsg':'Scroll','acl':'user'},
      {'title': 'Forms','link':'/forms_ctrl','popMsg':'Forms','acl':'user'},
      {'title': 'Cart','link':'/cart_ctrl','popMsg':'Cart','acl':'user'},
      {'title': 'Checkout','link':'/checkout_ctrl','popMsg':'Checkout','acl':'user'}
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
