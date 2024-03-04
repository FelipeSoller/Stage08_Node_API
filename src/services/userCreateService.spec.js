const UserCreateService = require("./UserCreateService")
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory")

const AppError = require("../utils/AppError")

describe('UserCreateService', () => {
  it('user should be created', async () => {
    const user = {
      name: 'John Doe',
      email: 'user@example.com',
      password: '123456'
    }

    const userRepositoryInMemory = new UserRepositoryInMemory()
    const userCreateService = new UserCreateService(userRepositoryInMemory)
    const userCreated = await userCreateService.execute(user)

    expect(userCreated).toHaveProperty('id')
  })

  it('user should not be created if email already exists', async () => {
    const user1 = {
      name: 'User One',
      email: 'user@example.com',
      password: '123456'
    }

    const user2 = {
      name: 'User two',
      email: 'user@example.com',
      password: '123456'
    }

    const userRepositoryInMemory = new UserRepositoryInMemory()
    const userCreateService = new UserCreateService(userRepositoryInMemory)

    await userCreateService.execute(user1)
    await expect(userCreateService.execute(user2)).rejects.toEqual(new AppError('This email is already in use'))
  })
})