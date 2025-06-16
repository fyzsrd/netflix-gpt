import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MovieCard from './MovieCard'

function WishlistContainer({ movieIDs, clearMovieIDs }) {
    useNowPlayingMovies()
    const movies = useSelector(store => store.movies)
    const WishlistMovie = movies.nowPlayingMovies?.filter(movie => movieIDs.includes(movie.id))

    return (
        <div className='bg-black text-white min-h-screen flex flex-col items-center justify-start pt-40'>
            <button 
                onClick={clearMovieIDs} 
                className='py-2 px-6 mb-6 text-white bg-red-500 rounded hover:bg-red-600 transition'
            >
                Clear Wishlist
            </button>

            {movieIDs.length === 0 ? (
                <p className="text-lg">No favorites added yet.</p>
            ) : (
                <>
                    {/* <ul className="list-disc pl-5 mb-6">
                        {movieIDs.map((id, index) => (
                            <li key={index}>{title}</li>
                        ))}
                    </ul> */}

                    
                   <div className='flex'>
                      {
                   WishlistMovie.map(movie =><MovieCard key={movie.id} posterPath={movie.poster_path} movieId={movie.id}/>)
                }
                   </div>
                    
                </>
            )}
        </div>
    )
}

export default WishlistContainer
