const CreateUser = require('../../../main/application/use_cases/CreateUser');

// System Under Test(SUT)
const UsersController = require('../../../main/adapters/controllers/UsersController');

jest.mock('../../../../src/AppConfig', () => ({ UserRepositories: {} }));
jest.mock('../../../main/application/use_cases/CreateUser');

describe('Create user', () => {
  it('should create an user with given params', async () => {
    // arrange
    const request = { body: { usrname: 'jeriel', email: 'jeriel@email.com', password: '123'} };
    CreateUser.mockResolvedValueOnce({});
    // act
    const response = await UsersController.createUser(request);
    // assert
    expect(response).toEqual({});
  });
});
