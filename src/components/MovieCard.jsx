import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import { useNavigate } from 'react-router-dom'

function MovieCard({posterPath,movieId}) {
    const navigate=useNavigate();

    const handleClick=()=>{
        navigate(`/movie/${movieId}`)
    }
  return (
    <div className='w-48 pr-4 cursor-pointer' onClick={handleClick}>
        <img className=''
         src={IMG_CDN_URL  + posterPath} alt="movielist" />
    </div>
  )
}

export default MovieCard 