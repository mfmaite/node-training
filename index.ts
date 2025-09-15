import express, { NextFunction, Request, Response } from "express";
import { RegisterRoutes } from "./build/routes";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import swaggerUi from 'swagger-ui-express';

declare module 'express-serve-static-core' {
  interface Request {
    requestTime?: number;
  }
}

export const app = express();

app.use(express.json());

// Middleware to log requests
const middleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`LOGGED: ${req.method} ${req.url}`);
  next();
};

const requestTime = function (req: Request, _res: Response, next: NextFunction) {
  req.requestTime = Date.now();
  next();
};

app.use(middleware);
app.use(requestTime);

// Set up Swagger UI
const swaggerDocument = (() => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const swaggerPath = join(__dirname, "build", "swagger.json");
    return JSON.parse(readFileSync(swaggerPath, "utf8"));
  } catch {
    return null;
  }
})();

if (swaggerDocument) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

app.get('/', (req: Request, res: Response) => {
  let responseText = 'Hello World!</br>';
  responseText += `<small>Requested at: ${req.requestTime}</small>`;
  res.send(responseText);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

RegisterRoutes(app);
