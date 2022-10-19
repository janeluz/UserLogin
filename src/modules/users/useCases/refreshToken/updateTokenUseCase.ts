import { User } from "../../model/user";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { UsersTokensRepository } from "../../repositories/implementations/UsersTokensRepository";

interface IRequest{
  user_id: string;
  refreshToken:string;
}

class UpdateTokenUseCase {
  constructor(private usersTokensrepository: UsersTokensRepository){}
  execute({ user_id, refreshToken} : IRequest): void{
    const update =  this.usersTokensrepository.findById(user_id)
  
  };

}

export { UpdateTokenUseCase};