import { ICreateUserTokenDto } from '../../../../dtos/ICreateUserTokenDTO';
import { UserTokens } from '../../model/userToken';
import { IUsersTokensRepository } from '../IUsersTokensRepository';



class UsersTokensRepository implements IUsersTokensRepository {

  private userTokens :UserTokens[];
  
  private static INSTANCE: UsersTokensRepository
  constructor() {
    this.userTokens= [];
  }
  
  public static getInstance(): UsersTokensRepository{
    if (!UsersTokensRepository.INSTANCE) {
      UsersTokensRepository.INSTANCE = new UsersTokensRepository()
    }
    return UsersTokensRepository.INSTANCE
  }
    create({ refreshToken, userId}: ICreateUserTokenDto): UserTokens{
    const tokens = new UserTokens(refreshToken,userId);
  
    Object.assign(tokens,{
      refreshToken,
      userId,
      
    });
     this.userTokens.push(tokens);
     return tokens;
    }
    findByRefresh(refreshToken: string): UserTokens |undefined {
      const tokens = this.userTokens.find((tokens) => tokens.refreshToken === refreshToken);
  
      return tokens;
    }
  }
  export { UsersTokensRepository };