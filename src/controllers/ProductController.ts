import { Request, Response } from "express";
import BaseController from "./BaseController";
import { IProduct, ProductModel, ProductSchema } from "@schemas/index";

class ProductController extends BaseController {
  public getAllProducts = async (req:Request, res:Response): Promise<Response> => {
    try {
      const result:ProductModel[] = await ProductSchema.find();
      const response:IProduct[] = result.map(data => data.toClient());

      return this.handleSuccess(res, response);
    } catch (error) {
      return this.handleError(res, error);
    }
  }
}

export default new ProductController();
