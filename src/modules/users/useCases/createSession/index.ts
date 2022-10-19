import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateSessionController } from "./createSessionController";
import { CreateSessionUseCase } from "./createSessionUseCase";



const usersRepository = UsersRepository.getInstance();
const createSessionUseCase = new CreateSessionUseCase(usersRepository);

const createSessionController = new CreateSessionController(createSessionUseCase);

export { createSessionController }
