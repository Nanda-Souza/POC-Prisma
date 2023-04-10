import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { animeSchema } from "../schemas/anime-schema.js";

const animeRoutes = Router();

animeRoutes.post('/add', validateSchema(animeSchema), (req, res) => {
    res.send('Ok')
})

export default animeRoutes;