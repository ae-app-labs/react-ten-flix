import { API_KEY } from "./constants"


export const URL_TRENDING = `trending/all/week?api_key=${API_KEY}&language=en-US`

export const URL_ACTION = `discover/movie?api_key=${API_KEY}&with_genres=28`

export const URL_ORIGINALS = `discover/tv?api_key=${API_KEY}&with_networks=213`