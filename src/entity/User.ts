import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

//TODO Crie a entidade de User

class User{

  private id: number;
  private firstName: string;
  private latsName: string;
  private email: string;

  constructor(id: number, firstName: string, lastName: string, email: string){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  get Id: number(){
    return this.id;
  }

  get FirstName: string(){
    return this.firstName;
  }

  get LastName: string(){
    return this.lastName;
  }

  get Email: string(){
    return this.email;
  }
  
}
