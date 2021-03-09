import environment from "@environment";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

class CryptoUtil {
    public getToken = (token: string): string => {
      return jwt.verify(token, environment.token) as string;
    }

    public createToken = (userId: string): string => {
      return jwt.sign(userId, environment.token);
    }

    public createEncryptPassword = async (password: string): Promise<string> => {
      return bcrypt.hash(password, 12);
    }

    public verifyEncryptPassword = async (encrypt: string, password: string): Promise<boolean> => {
      return bcrypt.compare(password, encrypt);
    }
}

export default new CryptoUtil();
