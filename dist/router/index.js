import express from "express";
import home from "./home";
import message from "./message";
const router = express.Router();
function routerApi(app) {
    app.use("/", router);
    router.use("/", home);
    router.use("/message", message);
}
export default routerApi;
