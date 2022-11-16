interface ICreateUserDto {
  id?: string;
  email: string;
  password:string;
  name:string;
  phone:string;
  age:number;
}

export { ICreateUserDto };
