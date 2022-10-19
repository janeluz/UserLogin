import { User } from "../model/user";

interface IcreateUserDto {
  email:string;
  password: string;
  name: string;
  age: string;
  phone: string;
}



interface IUsersRepository {
  create({email,password,name, age,phone}: IcreateUserDto):User;
  list(): User[];
  findByEmail(email:string): User;
}

export { IUsersRepository, IcreateUserDto };