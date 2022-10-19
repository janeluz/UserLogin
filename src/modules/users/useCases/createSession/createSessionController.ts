import { Response, Request } from 'express';
import { CreateUserUseCase } from '../createUser/createUserUseCase';
import { CreateSessionUseCase } from './createSessionUseCase';

class CreateSessionController {
  constructor(private createSessionUseCase: CreateSessionUseCase){}

 async handle(request: Request, response: Response) : Promise<Response> {
try{
    const { email,password } = request.body;

    const login = await this.createSessionUseCase.execute({email,password
    });
    console.log("teste",login)
    return response.status(201).json(login);

  }catch(errors){
    return response.status(400).json({})
  }
  }
}

export { CreateSessionController };