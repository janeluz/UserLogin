import { User } from "../model/user";
import { IUsersRepository, IcreateUserDto } from "./IUsersRepository";


class InMemoriaUsersRepository implements IUsersRepository {
  create({ email,password,name, age,phone}: IcreateUserDto): void {
    console.log(email,password,name,age,phone);
  }
  list():User[] {
   returnnull;
  }
  findByEmail(email: string): User {
    console.log(email);
    return null;

  }

}


export { InMemoriaUsersRepository };