import express from "express";
import { RegisterRoutes } from "./build/routes";
export const app = express();
RegisterRoutes(app);
