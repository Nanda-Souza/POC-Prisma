import errors from "../errors/index.js";
import { Anime, AnimeEntity } from "../protocols/anime.js";
import { insertAnime,
         findAnimeTitle,
         findAllAnime } from "../repositories/animeRepository.js";

async function createAnime(anime:Anime) {    
    const { rowCount } = await findAnimeTitle(anime.title);    
    if(rowCount) throw errors.duplicatedAnimeError(anime.title);    
    await insertAnime(anime);
    
}

async function findAnimes(): Promise<AnimeEntity[]> {
    const { rows} = await findAllAnime();    
    console.log(rows)
    return rows;    
}

export {
    createAnime,
    findAnimes,
}