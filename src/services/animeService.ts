import errors from "../errors/index.js";
import { Anime } from "../protocols/anime.js";
import { insertAnime,
         findAnimeTitle } from "../repositories/animeRepository.js";

async function createAnime(anime:Anime) {    
    const { rowCount } = await findAnimeTitle(anime.title);    
    if(rowCount) throw errors.duplicatedAnimeError(anime.title);    
    await insertAnime(anime);
    
}

export {
    createAnime
}