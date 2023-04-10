import errors from "../errors/index.js";
import { Anime, AnimeEntity } from "../protocols/anime.js";
import { insertAnime,
         findAnimeTitle,
         findAllAnime,
         findAnimeById,
         deleteAnimeById } from "../repositories/animeRepository.js";

async function createAnime(anime:Anime) {    
    const { rowCount } = await findAnimeTitle(anime.title);    
    if(rowCount) throw errors.duplicatedAnimeError(anime.title);    
    await insertAnime(anime);
    
}

async function findAnimes(): Promise<AnimeEntity[]> {
    const { rows} = await findAllAnime();        
    return rows;    
}

const deleteAnime = async (id:number): Promise<void> =>{
    const {rowCount} = await findAnimeById(id);
    if(rowCount === 0) throw errors.notFoundError();

    await deleteAnimeById(id);
};

export {
    createAnime,
    findAnimes,    
    deleteAnime,

}