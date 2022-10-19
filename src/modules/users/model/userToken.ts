import { v4 as uuidv4 } from 'uuid';

class UserTokens {
  
  refreshToken: string;
  userId: string;
  
  constructor( refreshToken: string, userId: string) {
    this.refreshToken = refreshToken;
    this.userId = userId;
  }
}

export { UserTokens };