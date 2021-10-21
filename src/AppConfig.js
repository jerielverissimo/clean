const UserRepositoryApi = require('../src/main/infrastructure/repositories/UserRepositoryApi');
module.exports = {
  UserRepositories: {
    'API': { userRepository: UserRepositoryApi },
    'MONGO': {},
    'REDIS': {},
  } 
}
