'use strict';

module.exports = class {
  constructor(id = null, username, email, password) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
  }
};
