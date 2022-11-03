import { getGenres } from './../../service/movie';
import { IMovieParams } from './../../types/movie';
import { getMovies, getTopMovie } from "@/service/movie"
import { useQuery } from "react-query"

export type MovieType = 'top/tv' | 'top/movie' | 'new release' | 'action' | 'comedie' | 'horror'
  | 'sci-fi' | 'animation' | 'documantary'

export function useBrandMovie () {
  const { data, error, isFetched } = useQuery(['top/movies'], getTopMovie)
  return { movie: data?.results[1], error, isFetched }
}

export function useFetchMovie (type: MovieType) {
  const { data, error, isFetched } = useQuery([type], async () => {
    let url = '/discover', params: Partial<IMovieParams> = {};
    const topParams : Partial<IMovieParams> = {
      "vote_average.gte": 7.5,
      "vote_count.gte": 2000
    }

    const getGenresIds = (...values: string[]) => {
      const genreIds : number[] = []
      const selectGenres = genres.filter(genre => {
        let isMatch = false; 
        for (const val of values) {
          isMatch = genre.name.toLowerCase() == val;
          if (genre.name.toLowerCase() == val) break;
        }
        return isMatch;
      })
      selectGenres.forEach(value => genreIds.push(value.id))

      return genreIds.join(',')
    }

    const genres = await getGenres()
    url += type == 'top/tv' ? '/tv' : '/movie'
    
    switch (type) {
      case 'top/tv' || 'top/movie':
        params = topParams
        break;
      case 'new release':
        params = { 
          year: new Date(Date.now()).getFullYear(),
          sort_by: 'release_date.desc',
          ...topParams
        }
        break;
      case 'action':
        params.with_genres = getGenresIds('action', 'thriller')
        break;
      case 'comedie':
        params = topParams
        params.with_genres = getGenresIds('romance', 'comedy')
        break;
      case 'sci-fi':
        params.with_genres = getGenresIds('science-fiction', 'adventure')
        break;
      case 'horror':
        params.with_genres = getGenresIds('drama', 'horror')
        break;
      case 'animation':
        params.with_genres = getGenresIds('animation')
        break;
      case 'documantary':
        params.with_genres = getGenresIds('documentary')
        break;
      default:
        break;
    }
    return getMovies(url, params) 
  })
  return { movie: data, error, isFetched }
}
