
import BaseRoutes from "./BaseRoutes";
import { UserController } from "@controllers/index";
import { AuthMiddleware, MockMiddleware } from "@middlewares/index";

class UserRoutes extends BaseRoutes {
  public constructor () {
    super();
    this.routes.get("/user/authenticate", MockMiddleware.intercept, AuthMiddleware.authenticate, UserController.getUser);
    this.routes.post("/user/push", MockMiddleware.intercept, AuthMiddleware.authenticated, UserController.pushPermission);
    this.routes.post("/user/login", MockMiddleware.intercept, UserController.login);
    this.routes.post("/user/register", MockMiddleware.intercept, UserController.register);
  }
}

export default new UserRoutes().routes;
