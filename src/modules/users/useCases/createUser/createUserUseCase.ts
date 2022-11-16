import { IUsersRepository } from '../../repositories/IUsersRepository'
import { AppError } from '../../../../errors/AppError'
import { User } from '../../model/user'
import { hash } from 'bcrypt'

interface IRequest {
  email: string
  password: string
  name: string
  age: string
  phone: string
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  async execute({
    email,
    password,
    name,
    age,
    phone
  }: IRequest): Promise<User> {
    const usersAlreadyExists = this.usersRepository.findByEmail(email)

    if (usersAlreadyExists) {
      throw new AppError(' user already exists!')
    }

    const passwordHash = await hash(password, 8)

    const user = this.usersRepository.create({
      email,
      password: passwordHash,
      name,
      age,
      phone
    })
     
    return user
  }
}

export { CreateUserUseCase }
