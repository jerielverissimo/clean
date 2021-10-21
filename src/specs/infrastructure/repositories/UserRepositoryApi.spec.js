const axios = require('axios');
const User = require('../../../main/domain/User');

// System Under Test(SUT)
const UserRepositoryApi = require('../../../main/infrastructure/repositories/UserRepositoryApi');

jest.mock('axios', () => ({ post: jest.fn() }));

describe('UserRepositoryApi', () => {
  it('should call client api to persist user', async () => {
    // arrange
    const user = new User(null, 'jeriel', 'jeriel@email.com', 'P@sW0rD');
    axios.post.mockResolvedValueOnce({});
    // act
    const resonpose = await UserRepositoryApi.persist(user);
    // assert
    expect(resonpose).toEqual({});
  })
});
