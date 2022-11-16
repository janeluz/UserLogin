// import { UserTokens } from "../../model/userToken";
// import { RefreshTokenUseCase } from "./createRefreshTokenUseCase";

// class RefreshTokenController {
//   constructor(private refreshTokenUseCase: RefreshTokenUseCase){}

//    async handle(request: Request, response: Response) : Promise<UserTokens>{
    
//     const   refreshToken   = request.body;
      
//      const  newToken =  await this.refreshTokenUseCase.execute(refreshToken);
    
//     return response.json();
//   }
// }
// export { RefreshTokenController };