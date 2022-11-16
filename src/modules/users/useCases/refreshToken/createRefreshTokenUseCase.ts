import { ICreateUserDto } from "../../../../dtos/ICreateDto";
import { ICreateUserTokenDto } from "../../../../dtos/ICreateUserTokenDTO";
import { AppError } from "../../../../errors/AppError";
import { UserTokens } from "../../model/userToken";
import { UsersTokensRepository } from "../../repositories/implementations/UsersTokensRepository";
import { IUsersTokensRepository } from "../../repositories/IUsersTokensRepository";

interface IRequest{
  refreshToken:string;
  userId: string;
}
class RefreshTokenUseCase {

  constructor (private usersTokensRepository: UsersTokensRepository) {}
 async execute({refreshToken,userId}: IRequest): Promise<UserTokens> {

  const verifyRefreshToken =  this.usersTokensRepository.findByRefresh(refreshToken);

  if (verifyRefreshToken) {
    throw new AppError(' refresh already exists!')
  }
 const newToken = this.usersTokensRepository.create({refreshToken,userId})
 return newToken;
  }
}
    export { RefreshTokenUseCase };