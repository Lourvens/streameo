export default interface IMovieGenre {
  id: number
  name: string
}

export interface IMovieGenreResponse {
  genres: IMovieGenre[]
}