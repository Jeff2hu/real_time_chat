import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    info: {
      title: "Chat API",
      version: "1.0.0",
    },
  },
  apis: ["../routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(options);

const swaggerSetup =
  ("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default swaggerSetup;
