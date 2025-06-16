import React, { useState } from 'react';
import { useMovie } from '../context/MovieContext';
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';
import VideoPlayer from './VideoPleyer';

function VideoTitle({ overview, title, buttonContent,movieId }) {
    const { addMovieID } = useMovie();
    const [isPlayerOpen, setIsPlayerOpen] = useState(false);

     useMovieTrailer(movieId);
      const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    const handleVideo = () => {
        setIsPlayerOpen(true); 
    };

    const closePlayer = () => {
        setIsPlayerOpen(false); 
    };


    const handleClick = () => {
        addMovieID(buttonContent);
        alert('movie adde to wach list')
        console.log('Added movie ID:', buttonContent);
    };

    return (
        <>
        <div className='w-full aspect-video pt-[20%] px-6 md:px-24 absolute bg-gradient-to-r from-black'>
            <h1 className='text-4xl font-bold text-white'>{title}</h1>
            <p className='text-white py-6 text-lg lg:w-1/4 md:w-1/2 sm:w-1/2 text-sm'>
                {overview?.length > 150 ? overview.slice(0, 150) + '...' : overview}
            </p>
            <div className='flex flex-wrap gap-4'>
                <button onClick={handleVideo} className='bg-white text-black p-4 px-8 text-lg rounded-lg cursor-pointer hover:bg-white/80'>
                    ▶ Play
                </button>
                <button
                    onClick={handleClick}
                    className='bg-gray-500/50 text-white p-4 px-8 text-lg cursor-pointer rounded-lg hover:bg-gray-500/70'
                >
                    addFav
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
