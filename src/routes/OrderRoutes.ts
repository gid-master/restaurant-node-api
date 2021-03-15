
import BaseRoutes from "./BaseRoutes";
import { OrderController } from "@controllers/index";
import { AuthMiddleware, MockMiddleware } from "@middlewares/index";

class OrderRoutes extends BaseRoutes {
  public constructor () {
    super();
    this.routes.post("/order", MockMiddleware.intercept, AuthMiddleware.authenticated, OrderController.createOrder);
    this.routes.get("/order", MockMiddleware.intercept, AuthMiddleware.authenticated, OrderController.getAllOrders);
    this.routes.post("/order/review", MockMiddleware.intercept, AuthMiddleware.authenticated, OrderController.reviewOrder);
  }
}

export default new OrderRoutes().routes;
