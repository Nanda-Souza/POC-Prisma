import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { animeSchema } from "../schemas/anime-schema.js";
import { create } from "../controllers/animeController.js"

const animeRoutes = Router();

animeRoutes.post('/add', validateSchema(animeSchema), create)

export default animeRoutes;