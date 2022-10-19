import { Response, Request } from 'express';
import { CreateUserUseCase } from './createUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase){}

   async handle(request: Request, response: Response) : Promise<Response> {
  
    const { email,password, name, age, phone } = request.body;
      
     const user = await this.createUserUseCase.execute({email,password,name,age,phone
    });
    
    return response.status(201).json(user);
  }
  }
export { CreateUserController };