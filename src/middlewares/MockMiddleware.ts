import { Request, Response, NextFunction } from "express";
import { UserMock, ProductMock, OrderMock } from "mocks";
import Environment from "@environment";

class MockMiddleware {
  public intercept = async (req:Request, res:Response, next:NextFunction) => {
    if (!Environment.useMock) {
      next();
      return;
    }

    const route:string = req.route.path;
    const method:string = req.method;

    switch (route) {
      case "/user/authenticate":
      case "/user/login":
      case "/user/register":
        return res.status(200).json({ success: true, data: UserMock });

      case "/user/push":
        return res.status(200).json({ success: true, data: req.body });

      case "/product":
        return res.status(200).json({ success: true, data: ProductMock });

      case "/order":
        if (method === "GET") {
          return res.status(200).json({ success: true, data: OrderMock });
        } else {
          return res.status(200).json({ success: true, data: req.body });
        }

      case "/order/review":
        return res.status(200).json({ success: true, data: req.body });
    }
  }
}

export default new MockMiddleware();
