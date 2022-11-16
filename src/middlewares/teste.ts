import { NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersTokensRepository } from "../modules/users/repositories/implementations/UsersTokensRepository";

interface IPayload {
  sub: string
}

export async function verifyRefreshToken(
  request: Request,
  response: Response,
  next: NextFunction
) {
const verifyRefreshToken = request.body;
  const [, refreshToken] = verifyRefreshToken.split(' ')
  try {
    const { sub: email } = verify(
      refreshToken,
      '2375bdc1db5f03c4e253a0663a587688'
    ) as IPayload

    const usersTokensRepository = UsersTokensRepository.getInstance()
    const user = usersTokensRepository.findByRefresh(refreshToken)

    if (!user) {
      throw new AppError('User does not exists!')
    }
 return next()
  } catch (error) {
    console.log(error)

    throw new AppError('invalid refreshtoken')
}
}