import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import Listing from './listing.js';

Meteor.publish('Listing.getById', function(id) {
  check(id, String);
  return Listing.find(id, { fields: { /*TODO*/ }, userId: this.userId });
});