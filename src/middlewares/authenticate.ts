import { Request, Response, NextFunction, request } from 'express'
import { verify } from 'jsonwebtoken'
import { AppError } from '../errors/AppError'
import { UsersRepository } from '../modules/users/repositories/implementations/UsersRepository'

interface IPayload {
  sub: string
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('token is  missing',401)
  }

  // [0] = Beaher
  // [1] = numero token

  const [, token] = authHeader.split(' ')
  try {
    const { sub: email } = verify(
      token,
      '80d8eb05ec0a7b26a10db03cdd5dcc45'
    ) as IPayload

    const usersRepository = UsersRepository.getInstance()
    const user = usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('User does not exists!')
    }
    return next()
  } catch (error) {
    console.log(error)

    throw new AppError('invalid token')
  }
}


