import { User } from "../model/user";

interface IcreateUserDto {
  email:string;
  password: string;
  name: string;
  age: string;
  phone: string;
}



interface IUsersRepository {
  create({email,password,name, age,phone}: IcreateUserDto):Promise<User>;
  list():Promise<User[]>;
  findByEmail(email:string):Promise< User>;
  findById(id:string): Promise<User>;
}

export { IUsersRepository, IcreateUserDto };