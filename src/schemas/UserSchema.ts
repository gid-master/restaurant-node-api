import { model } from "mongoose";
import { BaseSchema, BaseModel } from "./BaseSchema";

export interface IUser {
  id?:string;
  name: string;
  email: string;
  password?: string;
  pushPermission?:string;
  token?:string;
}

const UserSchema = new BaseSchema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  pushPermission: { type: String, required: false }
});

export type UserModel = BaseModel<IUser> & IUser;

export default model<UserModel>("User", UserSchema);
