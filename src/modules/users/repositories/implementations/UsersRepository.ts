import { response } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../../../..'
import { User } from '../../model/user'
import { IUsersRepository, IcreateUserDto } from '../IUsersRepository'

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = AppDataSource.getRepository(User)
  }

  async create({
    email,
    password,
    name,
    age,
    phone
  }: IcreateUserDto): Promise<User> {
    const user = this.repository.create({
      email,
      password,
      name,
      age,
      phone
    })

    await this.repository.save(user)
    return user
  }
  async list(): Promise<User[]> {
    const users = await this.repository.find()
    return users
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOneBy({ email })
    return user as any
  }
  async findById(id: string): Promise<User> {
    const user = await this.repository.findOneBy({ id })
    return user as any
  }
}

export { UsersRepository }
