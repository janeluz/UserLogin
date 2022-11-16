import { Router } from "express";
import { AppError } from "../errors/AppError";
import { ensureAdmin } from "../middlewares/admin";
import { ensureAuthenticated } from "../middlewares/authenticate";

import { UsersRepository } from "../modules/users/repositories/implementations/UsersRepository";
import { createUserController, listUsersController } from "../modules/users/useCases/createUser";



const usersRoutes = Router();
const usersRepository = UsersRepository.getInstance();
usersRoutes.post("/",(request,response) => {
  return createUserController.handle(request,response);
});

usersRoutes.get("/",ensureAuthenticated,(request,response) => {
  
  return listUsersController.handle(request,response);
 
});
export { usersRoutes};