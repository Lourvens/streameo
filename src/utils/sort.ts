import { getGenres } from "@/service/movie";
import { useQuery } from "react-query";
import IMovieGenre from "@/types/genre";


export function sortWithName(ids?: number[]) {
  const {data: genres} = useQuery(['genres'], getGenres);
  let matchGenre : IMovieGenre[] = [];

  genres?.forEach(genre => ids?.forEach((id) => {
    if(genre.id == id) matchGenre.push(genre)
  }))
  
  return matchGenre
}