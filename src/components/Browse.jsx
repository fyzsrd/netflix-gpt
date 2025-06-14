import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecoundryContainer from './SecoundryContainer'



function Browse() {

  useNowPlayingMovies()

  return (
    <div>
      <Header />
      <MainContainer />
      <SecoundryContainer />

      {
        /* 
        MainCOntainer
          -VideoBacground
          -VideoTitle
        SecoundryContainer
          -MovieList *n
            -cards*n

         */
      }
    </div>
  )
}

export default Browse