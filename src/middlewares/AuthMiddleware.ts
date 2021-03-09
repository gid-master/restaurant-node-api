import { Request, Response, NextFunction } from "express";
import { CryptoUtil } from "@utils/index";

class AuthMiddleware {
  // Used to protect routes that need to be authorized
  // Doing it the server returns unauthorized status if token is not valid
  public authenticated = async (req:Request, res:Response, next:NextFunction) => {
    const authorization: string = req.headers.authorization;
    const token: string = authorization ? authorization.split(" ")[1] : null;
    const userId:string = token ? CryptoUtil.getToken(token) : null;

    if (!userId) {
      return res.status(403).send("User is not authorized");
    }

    res.set("authenticatedUserId", userId);
    next();
  }

  // Authenticate user based on the JWT token sent through header
  public authenticate = async (req:Request, res:Response, next:NextFunction) => {
    const authorization: string = req.headers.authorization;
    const token: string = authorization ? authorization.split(" ")[1] : null;
    const userId:string = token ? CryptoUtil.getToken(token) : null;

    if (userId) {
      res.set("authenticatedUserId", userId);
    }

    next();
  }
}

export default new AuthMiddleware();
