
import { NextFunction } from "express";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/users/repositories/implementations/UsersRepository";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
){
  const { id } = request.user;

  const usersRepository = UsersRepository.getInstance();
  const user = await usersRepository.findById(id);

  if(!user.isAdmin) {
    throw new AppError("User isn't admin!");
  }

  return next();
}