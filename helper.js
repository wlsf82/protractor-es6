'use strict';

const shortid = require('shortid');
const uuid = require('node-uuid');

class Helper {
  generateRandomEmail() {
    return shortid.generate() + '@email.com';
  }

  generateRandomString() {
    return uuid.v4();
  }
}

module.exports = Helper;
