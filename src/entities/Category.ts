import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

//Decorator
@Entity("categories")
export class Category {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  decription: string;

  @CreateDateColumn()
  created_at: Date;


  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }


}

