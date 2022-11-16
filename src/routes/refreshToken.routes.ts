// import { Router } from "express";
// import { UsersTokensRepository } from "../modules/users/repositories/implementations/UsersTokensRepository";
// import { refreshTokenController } from "../modules/users/useCases/refreshToken";
// import { RefreshTokenController } from "../modules/users/useCases/refreshToken/createRefreshTokenController";

// const refreshTokenRoutes = Router();

// const usersTokensRepository = UsersTokensRepository.getInstance();

// refreshTokenRoutes.post("/",(request,response) => {
//   return refreshTokenController.handle(request,response);
// });



export { refreshTokenRoutes};