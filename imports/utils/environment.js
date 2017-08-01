import { Meteor } from 'meteor/meteor';

export const isDevelopment = () => {
  return Meteor.settings.environment === 'development';
};