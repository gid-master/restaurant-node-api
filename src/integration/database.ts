import readline from "readline";
import Application from "../application";
import Environment from "../environment";
import ProductMock from "mocks/ProductMock";
import { IProduct, ProductSchema, OrderSchema } from "@schemas/index";

Application.listen(Environment.port);
console.log("YOU ARE USING " + Environment.environment + " ENVIRONMENT, PORT: " + Environment.port);
console.log("READY TO POPULATE");

const initialize = async () => {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  const PopulateDatabase = (): Promise<boolean> => {
    return new Promise((resolve) => {
      rl.question("This action will drop all orders and change product ids. Are you sure you want to populate products collection ? (y/N)", (answer) => {
        return resolve(Boolean(answer.match(/^y(es)?$/i)));
      });
    });
  };

  const shouldPopulateDatabase:boolean = await PopulateDatabase();
  if (shouldPopulateDatabase) {
    console.log("Please wait until products get fully populated");

    await OrderSchema.deleteMany({});
    await ProductSchema.deleteMany({});

    ProductMock.forEach(async (product:IProduct) => {
      await ProductSchema.create(product);
    });

    console.log("Products populated successfully");
  }

  rl.close();

  console.log("NOW YOU ARE READY TO RUN THE SERVER");
};

initialize();
