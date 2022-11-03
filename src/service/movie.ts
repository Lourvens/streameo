import axios from "axios";

import { IMovieParams, IMovieResponse } from '@/types/movie';
import { IMovieGenreResponse } from '@/types/genre';

const img_path = 'https://image.tmdb.org/t/p'
export const original_img_url = img_path + '/original'
export const poster_img_url = img_path + '/w500'

const movieApi = axios.create({
  baseURL: '/api/movie',
  params: {
    api_key: '83b5e4608a426dcee1408add3aedde3b'
  }
})

export const getMovies = async (url: string, params?: Partial<IMovieParams> ) => {
  const { data } = await movieApi.get<IMovieResponse>(url, { params })
  return data.results
}

export const getTopMovie = async () => {
  const filter : Partial<IMovieParams> = {
    include_adult: false,
    "vote_average.gte": 8,
    "vote_count.gte": 5000
  }

  const { data } = await movieApi
                    .get<IMovieResponse>('/discover/movie', { params: filter })
  return data
}

export const getGenres = async () => {
  const { data } = await movieApi.get<IMovieGenreResponse>('/genre/movie/list')
  return data.genres
}

export default movieApi