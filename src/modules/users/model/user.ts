import { v4 as uuidV4 } from 'uuid';
class User {
  id?: string;
  email: string;
  password: string;
  name: string;
  age: string;
  phone: string;
 


constructor(email:string,password:string,name: string,age:string,phone:string) {
  this.email = email;
  this.password =password;
  this.name = name;
  this.age = age;
  this.phone = phone;

  if (!this.id) {
    this.id = uuidV4();
  }
}
}
export { User };

