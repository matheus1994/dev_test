import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

//TODO Crie a entidade de Post

class Post{

  private id: number;
  private title: string;
  private description: string;

  constructor(id: number, title: string, description: string){
      this.id = id;
      this.string = string;
      this.description = description;
  }
  
}
