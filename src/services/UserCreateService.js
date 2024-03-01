const { hash, compare } = require('bcryptjs')

const AppError = require('../utils/AppError')

class UserCreateService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository
  }

  async execute({ name, email, password }) {

    const checkUserExists = await this.usersRepository.findByEmail(email)

    if(checkUserExists) {
      throw new AppError('This email is already in use')
    }

    const hashedPassword = await hash(password, 8)

    const userCreated = await this.usersRepository.create({ name, email, password: hashedPassword })

    return userCreated
  }
}

module.exports = UserCreateService