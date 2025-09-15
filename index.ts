import express from "express";
import { RegisterRoutes } from "./build/routes";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import swaggerUi from 'swagger-ui-express';

export const app = express();

app.use(express.json());

// Configurar Swagger UI
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

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

RegisterRoutes(app);
