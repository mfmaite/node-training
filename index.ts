import express from "express";
import { RegisterRoutes } from "./build/routes";

export const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

RegisterRoutes(app);
