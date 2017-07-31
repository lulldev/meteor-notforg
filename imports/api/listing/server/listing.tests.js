/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { chai, assert } from 'meteor/practicalmeteor:chai';

import { Listing } from './listing.js';

// testing
describe('listing', function () {
  describe('mutators', function () {
    it('builds correctly from factory', function () {
      const listing = {}; // ...
      assert.typeOf(listing, 'object');
      assert.typeOf(listing.createdAt, 'date');
    });
  });
  it('leaves createdAt on update', function () {
    const createdAt = new Date(new Date() - 1000);
    let listing = {}; // ...
    const text = 'some new text';
    Listing.update(listing, { $set: { text } });
    listing = {}; // ...
    assert.equal(listing.text, text);
    assert.equal(listing.createdAt.getTime(), createdAt.getTime());
  });
});