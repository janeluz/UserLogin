import { Response, Request } from 'express'
import { AppError } from '../../../../errors/AppError'
import { ListUsersUseCase } from './listUserUseCase'

class ListUsersController {
  constructor(private listUsersUseCase: ListUsersUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const user = this.listUsersUseCase.execute()

      return response.status(201).json(user)
    } catch (errors) {
      throw new AppError('users not exists!')
    }
  }
}
export { ListUsersController }
