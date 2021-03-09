import Application from "./application";
import Environment from "./environment";

Application.listen(Environment.port);
console.log("YOU ARE USING " + Environment.environment + " ENVIRONMENT, PORT: " + Environment.port);
