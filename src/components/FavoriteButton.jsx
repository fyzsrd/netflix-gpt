import React, { useState } from 'react';
import { useMovie } from '../context/MovieContext';
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';
import VideoPlayer from './VideoPleyer';

function VideoTitle({ overview, title, buttonContent, movieId }) {
  const { addMovieID } = useMovie();
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  useMovieTrailer(movieId);
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  const handleVideo = () => setIsPlayerOpen(true);
  const closePlayer = () => setIsPlayerOpen(false);

  const handleClick = () => {
    addMovieID(buttonContent);
    alert('Movie added to watch list');
    console.log('Added movie ID:', buttonContent);
  };

  return (
    <>
      <div className="w-full aspect-video pt-[20%] px-3 sm:px-4 md:px-8 lg:px-16 xl:px-24 absolute bg-gradient-to-r from-black to-transparent">
        <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          {title}
        </h1>
        <p className="text-white py-3 sm:py-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-[95%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%]">
          {overview?.length > 150 ? overview.slice(0, 150) + '...' : overview}
        </p>
        <div className="flex flex-wrap gap-3 mt-2">
          <button
            onClick={handleVideo}
            className="bg-white text-black py-1.5 px-4 sm:py-2 sm:px-6 md:px-8 text-sm sm:text-base rounded-lg hover:bg-white/80 transition"
          >
            ▶ Play
          </button>
          <button
            onClick={handleClick}
            className="bg-gray-500/50 text-white py-1.5 px-4 sm:py-2 sm:px-6 md:px-8 text-sm sm:text-base rounded-lg hover:bg-gray-500/70 transition"
          >
            Add to Watchlist
          </button>
        </div>
      </div>

      {isPlayerOpen && trailerVideo?.key && (
        <VideoPlayer videoId={trailerVideo.key} onClose={closePlayer} />
      )}
    </>
  );
}

export default VideoTitle;
