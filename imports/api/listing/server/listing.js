import { Mongo } from 'meteor/mongo';
import { listingSchema } from './schema.js';

class ListingCollection extends Mongo.Collection {
}

export const Orders = new ListingCollection();