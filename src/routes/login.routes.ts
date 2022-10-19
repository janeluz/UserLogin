import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/authenticate";
import { UsersRepository } from "../modules/users/repositories/implementations/UsersRepository";
import { createSessionController } from "../modules/users/useCases/createSession";

const sessionRoutes = Router();

sessionRoutes.post("/",(request,response) => {
  return createSessionController.handle(request,response);
});

sessionRoutes.put("/", (request,response) => {
  return createSessionController.handle(request,response);
});

export { sessionRoutes};