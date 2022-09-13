import { Movie } from './Movie';

export function MoviesList({ movies }) {
  return (
    <div className="container">
      {movies.map((movie) => (
        <Movie
          movieId={movie.id}
          movieTitle={movie.title}
          overview={movie.overview}
        />
      ))}
    </div>
  );
}
