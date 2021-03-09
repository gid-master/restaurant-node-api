
import BaseRoutes from "./BaseRoutes";
import { OrderController } from "@controllers/index";
import { AuthMiddleware, MockMiddleware } from "@middlewares/index";

class OrderRoutes extends BaseRoutes {
  public constructor () {
    super();
    this.routes.post("/order", MockMiddleware.intercept, AuthMiddleware.authenticate, OrderController.createOrder);
    this.routes.get("/order", MockMiddleware.intercept, AuthMiddleware.authenticate, OrderController.getAllOrders);
    this.routes.post("/order/review", MockMiddleware.intercept, AuthMiddleware.authenticate, OrderController.reviewOrder);
  }
}

export default new OrderRoutes().routes;
