import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ title, movies }) {
  console.log(movies);
  return (
    <div className="xl:px-6 md:px-5 sm:px-2 px-2">
      <h1 className="text-white text-base sm:text-lg md:text-xl xl:text-3xl py-3 sm:py-4">
        {title}
      </h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex gap-2 sm:gap-3">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} movieId={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
