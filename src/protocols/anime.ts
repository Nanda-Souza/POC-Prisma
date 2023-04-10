//anime table
export type AnimeEntity = {
    id: number,
	title: string,
	episodes: number,
	seasons: number,
	description: string,
	score: number,
}

export type Anime = Omit<AnimeEntity, "id">
