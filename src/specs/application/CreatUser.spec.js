const User = require('../../main/domain/User');

// System Under Test(SUT)
const CreateUser = require('../../main/application/use_cases/CreateUser');

it('should resolve with the newly persisted user (argmented with an ID)', async () => {
  // arrange
  const persistedUser = new User(123, 'jeriel', 'jeriel@email.com', 'P@sW0rD');
  const mockUserRepository = { persist: jest.fn(() => persistedUser) };

  // act
  const user = await CreateUser('jeriel', 'jeriel@email.com', 'P@sW0rD', { userRepository: mockUserRepository });

  // assert
  expect(mockUserRepository.persist).toHaveBeenCalledWith(new User(null, 'jeriel', 'jeriel@email.com', 'P@sW0rD'));
  expect(user).toEqual(persistedUser);
});
