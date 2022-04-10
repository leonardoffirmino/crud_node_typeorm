import { Request, Response } from "express";
import { GetAllCategoriesService } from "../services/GetAllCategoriesService";


export class GetAllCategoriesController {
  async handle(request: Request, reponse: Response) {
    const service = new GetAllCategoriesService();

    const categories = await service.execute()

    return reponse.json(categories);
  }
}