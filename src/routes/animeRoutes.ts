import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { animeSchema } from "../schemas/anime-schema.js";
import { create,
         findAll,
         deleteAnimeId,
         updateAnimeId } from "../controllers/animeController.js"

const animeRoutes = Router();

animeRoutes.post('/add', validateSchema(animeSchema), create)
animeRoutes.get('/all', findAll)
animeRoutes.delete('/delete/:id', deleteAnimeId)
animeRoutes.put('/update/:id', validateSchema(animeSchema), updateAnimeId)

export default animeRoutes;