import { Request, Response, NextFunction } from "express"
import { Anime } from "../protocols/anime.js"
import { createAnime } from "../services/animeService.js"


const create = async (req: Request, res: Response, next:NextFunction) =>{
    const body = req.body as Anime;    
    try {        
        await createAnime(body);
        res.status(201).send();
    } catch (error) {        
        next(error);
    }
  
}

export {
    create
}