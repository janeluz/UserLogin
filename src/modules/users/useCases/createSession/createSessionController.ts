import { Response, Request } from 'express';
import { CreateSessionUseCase } from './createSessionUseCase';

class CreateSessionController {
  constructor(private createSessionUseCase: CreateSessionUseCase){}

 async handle(request: Request, response: Response) : Promise<Response> {

    const { email,password } = request.body;

    const login = await this.createSessionUseCase.execute({email,password
    });
    console.log("teste",login)
    return response.status(201).json(login);

  }
  }


export { CreateSessionController };