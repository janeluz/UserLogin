import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import auth from '../../../../config/auth'
import { AppError } from '../../../../errors/AppError'

import { IUsersRepository } from '../../repositories/IUsersRepository'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    id: string
    name: string
    email: string
  }
  token: string
  refreshToken: string
}

class CreateSessionUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('Email or password incorrect.')
    }
    const {
      expiresIn,
      secretToken,
      secretRefreshToken,
      expiresInRefreshToken
    } = auth

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect.')
    }

    const token = sign({ user }, secretToken, {
      subject: user.id,
      expiresIn: expiresIn
    })
    const refreshToken = sign({ user }, secretRefreshToken, {
      subject: user.id,
      expiresIn: expiresInRefreshToken
    })
    this.usersRepository.create({
      id: user.id,
      refreshToken
    })

    const tokenReturn: IResponse = {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      },
      refreshToken
    }
    return tokenReturn
  }
}

export { CreateSessionUseCase }
