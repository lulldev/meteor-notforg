// Fill the DB with example data on startup
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
// todo: import generator

Meteor.startup(() => {
  /*
  TODO: users adding
  if ( Meteor.users.find().count() === 0 ) {
    const users = [
      {
        email: 'user@gmail.com',
        password: 'wowweb',
        profile: { fullname: 'Denis Perov' }
      }
    ];
    users.forEach(admin => {
      const userId = Accounts.createUser(admin);
      Roles.addUsersToRoles(userId, 'admin');
    });
  }
  */
});
