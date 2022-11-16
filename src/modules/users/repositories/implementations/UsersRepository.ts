import { response } from 'express'
import { User } from '../../model/user'
import { IUsersRepository, IcreateUserDto } from '../IUsersRepository'

class UsersRepository implements IUsersRepository {

  private users: User[]

  private static INSTANCE: UsersRepository
  private constructor() {
    this.users = []
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository()
    }
    return UsersRepository.INSTANCE
  }
  create({ email, password, name, age, phone }: IcreateUserDto): User {
    const user = new User(email, password, name, age, phone)

    Object.assign(user, {
      email,
      password,
      name,
      age,
      phone
    })

    this.users.push(user)
    return user
  }
  list(): User[] {
    return this.users
  }
  findByEmail(email: string): User  {
    const user = this.users.find(user => user.email === email)
    return user as any
  }
  async findById(id: string): Promise<User> {
    const user = this.users.findIndex(user => user.id === id);
    return user as any;
}
}

export { UsersRepository }
