import { stringify } from 'querystring';
import { ICreateUserTokenDto } from '../../../../dtos/ICreateUserTokenDTO';
import { UserTokens } from '../../model/userToken';
import { IUsersTokensRepository } from '../IUsersTokensRepository';


class UsersTokensRepository implements IUsersTokensRepository {
  usersTokens: UserTokens [] = [];

  async create({
   
    refreshToken,
    userId,
  }: ICreateUserTokenDto): Promise<UserTokens> {
    const usersTokens = new UserTokens(refreshToken, userId);

    Object.assign(usersTokens, {
      refreshToken,
      userId,
    });
    this.usersTokens.push(usersTokens);
    return usersTokens;
  }
  findById(user_id: string): Promise<void> {
    const updateToken = this.usersTokens.findIndex(user => user.userId === user_id);
    
  }
}

export { UsersTokensRepository };
