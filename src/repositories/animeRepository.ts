import { QueryResult } from "pg";
import { Anime, AnimeEntity } from "../protocols/anime.js";
import { connection } from "../config/database.js";

async function insertAnime(anime: Anime): Promise<QueryResult<AnimeEntity>> {
    console.log("insert anime")
    return connection.query(`
        INSERT INTO animes (title, episodes, seasons, description, score) VALUES ($1, $2, $3, $4, $5)
    `,  [anime.title, anime.episodes, anime.seasons, anime.description, anime.score]);
    
}

async function findAnimeTitle (title:string){
    
    return await connection.query(`
        SELECT * FROM animes WHERE title = $1
    `, [title]
    );
}

export {
    insertAnime,
    findAnimeTitle
}