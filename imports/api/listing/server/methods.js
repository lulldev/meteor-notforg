import { Meteor } from 'meteor/meteor';

import Listing from './listing.js';

// hight level access to logick
Meteor.methods({
  'Listing.add'(some) {
    return Listing.addNewItem(some);
  },
});