'use strict';

const shordid = require('shortid');
const uuid = require('node-uuid');

class Helper {
  constructor() {}

  generateRandomEmail() {
    return shordid.generate() + '@email.com';
  }

  generateRandomString() {
    return uuid.v4();
  }
}

module.exports = Helper;
