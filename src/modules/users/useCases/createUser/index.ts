import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserController } from "./createUserController";
import { CreateUserUseCase } from "./createUserUseCase";
import { ListUsersController } from "./listUsersController";
import { ListUsersUseCase } from "./listUserUseCase";

const usersRepository = UsersRepository.getInstance();
const createUserUseCase = new CreateUserUseCase(usersRepository);

const createUserController = new CreateUserController(createUserUseCase);

const listUsersUseCase = new ListUsersUseCase(usersRepository);
const listUsersController = new ListUsersController(listUsersUseCase);

export { createUserController,listUsersController }
