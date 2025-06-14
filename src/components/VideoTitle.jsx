import React from 'react';

function VideoTitle({ overview, title }) {
    return (
        <div className='w-full aspect-video pt-[20%] px-6 md:px-24 absolute bg-gradient-to-r from-black'>
            <h1 className='text-4xl font-bold text-white'>{title}</h1>
            <p className='text-white py-6 text-lg lg:w-1/4 md:w-1/2 sm:w-1/2 text-sm'>
                {overview?.length > 150 ? overview.slice(0, 150) + '...' : overview}
            </p>
            <div className='flex flex-wrap gap-4'>
                <button className='bg-white text-black p-4 px-8 text-lg rounded-lg hover:bg-white/80'>
                    ▶ Play
                </button>
                <button className='bg-gray-500/50 text-white p-4 px-8 text-lg rounded-lg hover:bg-gray-500/70'>
                    More Info
                </button>
            </div>
        </div>
    );
}

export default VideoTitle;
