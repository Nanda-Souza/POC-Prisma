import { Request, Response, NextFunction } from "express"
import { Anime, AnimeEntity } from "../protocols/anime.js"
import { createAnime,
         findAnimes,
         deleteAnime } from "../services/animeService.js"


const create = async (req: Request, res: Response, next:NextFunction) =>{
    const body = req.body as Anime;    
    try {        
        await createAnime(body);
        res.status(201).send();
    } catch (error) {        
        next(error);
    }
  
}

const findAll = async (_req: Request, res:Response, next:NextFunction)=>{
    try {        
     const animes = await findAnimes();     
     res.status(200).send(animes);
    } catch (error) {
     next(error);
    } 
 };


 const deleteAnimeId = async (req: Request, res:Response, next:NextFunction)=>{
    const {id} = req.params;
    try {
        await deleteAnime(Number(id));
        res.status(200).send({"message": "Anime entry deleted!."});
    } catch (error) {
        next(error);
    }
};

export {
    create,
    findAll,
    deleteAnimeId
}