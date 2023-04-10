import { Router } from "express";
import animeRoutes from "./animeRoutes.js";

const routes = Router();

routes.use("/animes", animeRoutes);

export default routes;