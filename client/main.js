// Import Tether.js - Bootstrap tooltip requires Tether.
// We also add 'global.Tether' as a workaround for Meteor.
import tether from 'tether';
global.Tether = tether;
// Import Bootstrap js npm module.
bootstrap = require('bootstrap');

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
