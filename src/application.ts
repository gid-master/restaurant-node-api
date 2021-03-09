import express from "express";
import cors from "cors";
import compression from "compression";
import mongoose from "mongoose";
import Environment from "@environment";
import { UserRoutes, ProductRoutes, OrderRoutes } from "@routes/index";

class Application {
    public application: express.Application;

    public constructor () {
      this.application = express();
      this.database();
      this.assets();
      this.middlewares();
      this.routes();
    }

    private database ():void {
      if (!Environment.useMock) {
        mongoose.connect(Environment.mongodb, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
      }
    }

    private assets (): void {
      this.application.use("/assets", express.static("./assets"));
    }

    private middlewares ():void {
      this.application.use(express.json());
      this.application.use(cors());
      this.application.use(compression());
    }

    private routes ():void {
      this.application.use(UserRoutes);
      this.application.use(ProductRoutes);
      this.application.use(OrderRoutes);

      this.application.use((req, res) => {
        res.status(404).send("API not found");
      });
    }
}

export default new Application().application;
