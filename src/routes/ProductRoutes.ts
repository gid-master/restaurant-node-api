
import BaseRoutes from "./BaseRoutes";
import { ProductController } from "@controllers/index";
import { MockMiddleware } from "@middlewares/index";

class ProductRoutes extends BaseRoutes {
  public constructor () {
    super();
    this.routes.get("/product", MockMiddleware.intercept, ProductController.getAllProducts);
  }
}

export default new ProductRoutes().routes;
