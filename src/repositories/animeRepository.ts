import { QueryResult } from "pg";
import { Anime, AnimeEntity } from "../protocols/anime.js";
import { connection } from "../config/database.js";

async function insertAnime(anime: Anime): Promise<QueryResult<AnimeEntity>> {    
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

async function findAllAnime(): Promise<QueryResult<AnimeEntity>> {
    return connection.query("SELECT * FROM animes;");
    
}

const findAnimeById = async (id:number) =>{
    const result = await connection.query(`
    SELECT * FROM animes WHERE id = $1; 
    `,[id])
    return result;
};

const deleteAnimeById = async (id:number) =>{
    await connection.query(`
    DELETE FROM animes WHERE id = $1
    `,[id])
};

async function updateAnimeById(id: number, anime: Anime): Promise<QueryResult<AnimeEntity>> {
    return connection.query(`
        UPDATE animes SET title = $1, episodes = $2, seasons = $3, description = $4, score = $5 WHERE id = $6
    `,  [anime.title, anime.episodes, anime.seasons, anime.description, anime.score, id]);
    
}

export {
    insertAnime,
    findAnimeTitle,
    findAllAnime,
    findAnimeById,
    deleteAnimeById,
    updateAnimeById,
}