import { Response, Request } from 'express';
import { CreateUserUseCase } from '../createUser/createUserUseCase';
import {  UpdateTokenUseCase } from './updateTokenUseCase';


class UpdateTokenController {
  constructor(private updateTokenUseCase: UpdateTokenUseCase){}

 async handle(request: Request, response: Response) : Promise<Response> {

    const { user_id } = request.params;
    const { refreshToken } = request.body;

   this.updateTokenUseCase.execute({user_id,refreshToken
    });
    console.log("teste")
    return response.status(204).json({});
    }
  } 
  
 

export { UpdateTokenController };