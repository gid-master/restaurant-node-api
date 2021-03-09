import { Request, Response } from "express";
import BaseController from "./BaseController";
import { IUser, UserModel, UserSchema } from "@schemas/index";
import { CryptoUtil } from "@utils/index";

class UserController extends BaseController {
  public getUser = async (req:Request, res:Response): Promise<Response> => {
    try {
      const userId: string = res.get("authenticatedUserId");
      const result:UserModel = userId ? await UserSchema.findById(userId).select("-password -pushPermission") : null;
      const response:IUser = result ? result.toClient() : null;

      return this.handleSuccess(res, response);
    } catch (error) {
      return this.handleError(res, error);
    }
  }

  public login = async (req:Request, res:Response): Promise<Response> => {
    try {
      const { email, password } = req.body;
      const result:UserModel = await UserSchema.findOne({ email: email });

      if (!result) {
        throw Error("Email not found");
      }

      const valid:boolean = await CryptoUtil.verifyEncryptPassword(result.password, password);
      if (!valid) {
        throw Error("Email or password invalid");
      }

      const response:IUser = {
        ...result.toClient(),
        token: CryptoUtil.createToken(result._id.toString()),
        password: null
      };

      return this.handleSuccess(res, response);
    } catch (error) {
      return this.handleError(res, error);
    }
  }

  public register = async (req:Request, res:Response): Promise<Response> => {
    try {
      const { email, password, name } = req.body;

      const existEmail = await UserSchema.findOne({ email: email });
      if (existEmail) {
        throw Error("Email already registered");
      }

      const encryptPassword:string = await CryptoUtil.createEncryptPassword(password);
      const result = await UserSchema.create({ name, email, password: encryptPassword });

      const response:IUser = {
        ...result.toClient(),
        token: CryptoUtil.createToken(result._id.toString()),
        password: null
      };

      return this.handleSuccess(res, response);
    } catch (error) {
      return this.handleError(res, error);
    }
  }

  public pushPermission = async (req:Request, res:Response): Promise<Response> => {
    try {
      const { pushPermission } = req.body;
      const userId:string = res.get("authenticatedUserId");

      await UserSchema.findByIdAndUpdate(userId, { pushPermission: pushPermission });

      return this.handleSuccess(res, true);
    } catch (error) {
      return this.handleError(res, error);
    }
  }
}

export default new UserController();
