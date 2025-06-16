import React, { useState } from 'react';
import VideoPlayer from './VideoPleyer';
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

function VideoTitle({ overview, title, buttonContent, movieId }) {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  useMovieTrailer(movieId);
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  const handleVideo = () => {
    setIsPlayerOpen(true);
  };

  const closePlayer = () => {
    setIsPlayerOpen(false);
  };

  return (
    <>
      <div className="w-full aspect-video absolute bg-gradient-to-r from-black to-transparent pt-[20%] px-3 sm:px-4 md:px-16 lg:px-24">
        <h1 className="text-white font-bold text-base sm:text-lg md:text-2xl lg:text-4xl">
          {title}
        </h1>
        <p className="text-white py-2 text-xs sm:text-sm md:text-base lg:text-lg max-w-[95%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%]">
          {overview?.length > 150 ? overview.slice(0, 150) + '...' : overview}
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
          <button
            onClick={handleVideo}
            className="bg-white text-black py-1 px-4 sm:py-2 sm:px-6 md:px-8 text-xs sm:text-sm rounded-lg hover:bg-white/80 transition"
          >
            ▶ Play
          </button>
          <button className="bg-gray-500/50 text-white py-1 px-4 sm:py-2 sm:px-6 md:px-8 text-xs sm:text-sm rounded-lg hover:bg-gray-500/70 transition">
            {buttonContent}
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
