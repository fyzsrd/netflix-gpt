import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

function MainContainer() {
    const movies=useSelector(store=> store.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie=movies[0];

    const {original_title,overview,id}=mainMovie
    
  return (
    <div className='ralative'>
        <VideoTitle  title={original_title} overview={overview} buttonContent={'More Info'} movieId={id}  />
        <VideoBackground movieId={id} />

    </div>
  )
}

export default MainContainer