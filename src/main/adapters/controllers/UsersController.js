'use strict';

const config = require('../../../AppConfig');
const CreateUser = require('../../application/use_cases/CreateUser');

module.exports = {
  async createUser(req) {
    // Context
    const repository = config.UserRepositories['API'];

    // Input
    const { username, email, password } = req.body;

    // Treatment
    const user = await CreateUser(username, email, password, repository);

    // Output
    return user;
  }
};
