import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../utils/constants';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import Header from './Header';
import FavoriteButton from './FavoriteButton';

function Deteails() {
  useNowPlayingMovies();

  const { movieId } = useParams();
  const fallbackId = '1376434';

  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const activeMovieId = parseInt(movieId || fallbackId);
  const movie = movies?.find((m) => m.id === activeMovieId);

  if (!movies || movies.length === 0) {
    return <div className="text-white p-4">Loading movie data...</div>;
  }

  if (!movie) {
    return <div className="text-white p-4">Movie not found.</div>;
  }

  const { original_title, overview, id, poster_path, release_date, vote_average } = movie;

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />

      <div className="relative">
        <FavoriteButton
          title={original_title}
          overview={overview}
          buttonContent={activeMovieId}
          movieId={movieId}
        />
        <VideoBackground movieId={id} />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 px-6 md:px-12 py-8">
        {/* Poster and Title */}
        <div className="flex-shrink-0 text-center lg:text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            {original_title}
          </h1>
          <img
            src={IMG_CDN_URL + poster_path}
            alt={original_title}
            className="mx-auto lg:mx-0 w-40 sm:w-48 md:w-64 rounded shadow-md"
          />
        </div>

        {/* Overview and Details */}
        <div className="text-sm sm:text-base md:text-lg max-w-xl">
          <p className="mb-4">{overview}</p>
          <p className="mb-2">📅 <strong>Release Date:</strong> {release_date}</p>
          <p className="mb-2">⭐ <strong>Rating:</strong> {vote_average}/10</p>
        </div>
      </div>
    </div>
  );
}

export default Deteails;
