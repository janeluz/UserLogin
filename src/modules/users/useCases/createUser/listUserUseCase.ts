import { idText } from 'typescript';
import { User } from '../../model/user';
import { IUsersRepository } from '../../repositories/IUsersRepository';

class ListUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(): User[] {
    const users = this.usersRepository.list();
    console.log("testeeeeeeee",users)
    return users;
  }
}

export { ListUsersUseCase };
