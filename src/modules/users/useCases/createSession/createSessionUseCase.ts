import { compare } from 'bcrypt'
import dayjs from 'dayjs'
import { sign } from 'jsonwebtoken'
import auth from '../../../../config/auth'
import { AppError } from '../../../../errors/AppError'
import { GenerateRefreshToken } from '../../../provider/generateRefreshToken'
import { UsersTokensRepository } from '../../repositories/implementations/UsersTokensRepository'

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
  constructor(
    private usersRepository: IUsersRepository,
    private usersTokensRepository: UsersTokensRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('Email or password incorrect.')
    }
    const {
      expiresInToken,
      secretToken,
      secretRefreshToken,
      expiresInRefreshToken,
      expiresRefreshTokenDays
    } = auth

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect.')
    }

    const token = sign({ email }, secretToken, {
      subject: user.id,
      expiresIn: expiresInToken
    })

    const generateRefreshToken = new GenerateRefreshToken()
    const refreshToken = await generateRefreshToken.execute(user.id)

    return { token, refreshToken }
  }
}

export { CreateSessionUseCase }
