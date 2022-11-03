import { original_img_url } from '@/service/movie';

export interface IMovieParams  {
  sort_by: 'popularity.asc' | 'popularity.desc' | 'release_date.asc' | 'release_date.desc' |
    'vote_average.asc' | 'vote_average.desc' | 'vote_count.asc' | 'vote_count.desc'
  page: number,
  'vote_average.gte': number
  'vote_average.lte': number
  'vote_count.gte': number
  'vote_count.lte': number
  include_adult: boolean
  with_genres: string
  year: number
}


export default interface IMovieData {
  id: number
  title: string
  name: string
  overview: string
  popularity: number
  release_date: string
  first_air_date: string
  vote_average: string
  vote_count: number
  adult: boolean
  backdrop_path: string
  poster_path: string
  genre_ids: number[]
}

export interface IMovieResponse {
  results: IMovieData[]
  page: number
  total_pages: number
  total_results: number
}
