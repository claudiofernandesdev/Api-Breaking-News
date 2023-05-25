import express from 'express';
const route = express.Router();
import { create, findAll, findById, update } from "../controllers/user.controller.js";

import { validId, validUser } from "../middlewares/global.middlewares.js";

route.post("/", create);
route.get("/", findAll);
route.get("/:id", validId, validUser, findById);
route.patch("/:id", validId, validUser, update);

export default route;
