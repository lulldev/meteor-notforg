// import { Accounts } from 'meteor/accounts-base';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import Layouts
import '/imports/ui/layouts';

// Import Pages
import '/imports/ui/pages/index/index.js';
import '/imports/ui/pages/test/test.js';

// Home route
FlowRouter.route('/', {
  name: 'index',
  action() {
    BlazeLayout.render('Public_layout', { main: 'Index_page'});
  },
});

FlowRouter.route('/test', {
  name: 'test',
  action() {
    BlazeLayout.render('Public_layout', { main: 'Test_page'});
  }
});