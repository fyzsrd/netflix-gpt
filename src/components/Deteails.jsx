import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../utils/constants';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import Header from './Header';

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
    <div>
        <Header />
      <div className="relative">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
        <h1 className="text-2xl font-bold">Movie Details: {original_title}</h1>
        <img src={IMG_CDN_URL + poster_path} alt={original_title} className="my-4 w-64" />

        {/* Optional info */}
        {/* <p>{overview}</p>
        <p>Release Date: {release_date}</p>
        <p>Rating: {vote_average}/10</p> */}
      </div>
    </div>
  );
}

export default Deteails;
