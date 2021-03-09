import { Response } from "express";

export default class BaseController {
  // make all response consistent and always return based on the response interface
  // using succs, message and data, only success is compulsory
  protected async handleSuccess<T> (res:Response, data:T): Promise<Response> {
    return res.status(200).json({
      success: true,
      data: data
    });
  }

  // Right here you can save logs if you want
  protected async handleError (res:Response, error: Error): Promise<Response> {
    return res.status(200).json({
      success: false,
      message: error.message || error
    });
  }
}
