import joi from "joi";
import { Anime } from "../protocols/anime";

export const animeSchema = joi.object<Anime>({
    title: joi.string().min(2).required(),
    episodes: joi.number().integer().min(1).required(),
    seasons: joi.number().integer().min(1).required(),
    description: joi.string().min(2).required(),
    score: joi.number().integer().min(0).max(10).required(),
})