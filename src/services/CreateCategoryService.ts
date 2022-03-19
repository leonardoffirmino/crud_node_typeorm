import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryRequest = {
  name: string;
  decription: string;
};

export class CreateCategoryService {

  async execute({ name, decription }: CategoryRequest): Promise<Category | Error> {
    const repo = getRepository(Category);

    if (await repo.findOne({ name })) {
      return new Error("Category already exists!");
    }

    const category = repo.create({
      name,
      decription,
    })

    await repo.save(category);

    return category;


  }
}