import { ICreateUserTokenDto } from '../../../dtos/ICreateUserTokenDTO';
import { UserTokens } from '../model/userToken';

interface IUsersTokensRepository {
   
    create({ refreshToken,userId }: ICreateUserTokenDto):UserTokens;
    findByRefresh(refreshToken:string): UserTokens| undefined;
  }
  

export { IUsersTokensRepository };
