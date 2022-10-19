import { ICreateUserTokenDto } from '../../../dtos/ICreateUserTokenDTO';
import { UserTokens } from '../model/userToken';

interface IUsersTokensRepository {
  create({
    
    refreshToken,
    userId,
  }: ICreateUserTokenDto): Promise<UserTokens>;

  findById(user_id: string): Promise<void>;
}

export { IUsersTokensRepository };
