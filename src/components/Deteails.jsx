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
        <div>
            <Header />
            <div className="relative">
                <FavoriteButton title={original_title} overview={overview} buttonContent={activeMovieId} movieId={movieId} />
                <VideoBackground movieId={id}  />
                



            </div>
            <div className='bg-black text-white flex justify-between' >
                <div className='pl-10'>
                    <h1 className="text-2xl font-bold ">Movie Details: {original_title}</h1>
                    <img src={IMG_CDN_URL + poster_path} alt={original_title} className="my-4 w-64" />
                </div>

                <div className='pr-20 pl-10'>
                    <p>{overview}</p>
                    <p className='mt-3'>Release Date: {release_date}</p>
                    <p className='mt-3'>Rating: {vote_average}/10</p>
                </div>
            </div>
            
        </div>
    );
}

export default Deteails;
