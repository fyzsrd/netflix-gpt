import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecoundryContainer() {
  const movies = useSelector(store => store.movies)
  return (
    <div className=' bg-black '>
      <div className='pl-12 relative z-10 -mt-40 md:-mt-16 lg:-mt-25 xl:-mt-72' >
        <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
      </div>

      <MovieList title={'Trending'} movies={movies.nowPlayingMovies} />
      <MovieList title={'Up Coming'} movies={movies.nowPlayingMovies} />
      <MovieList title={'Horror'} movies={movies.nowPlayingMovies} />
    </div>
  )
}

export default SecoundryContainer