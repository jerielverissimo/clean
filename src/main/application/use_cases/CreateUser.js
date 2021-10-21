'use strict';

const User = require('../../domain/User');

module.exports = (username, email, password, { userRepository }) => {
  const user = new User(null, username, email, password);
  return userRepository.persist(user);
}
