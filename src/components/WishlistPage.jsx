import React, { useEffect } from 'react';
import { useMovie } from '../context/MovieContext';
import Header from './Header';
import WishlistContainer from './WishlistContainer';

function WishlistPage() {
    const { movieIDs, clearMovieIDs } = useMovie();
    console.log(movieIDs)

    useEffect(() => {
  console.log('movieIDs on WishlistPage:', movieIDs);
}, [movieIDs]);

    return (
       <div className=''>
        <div>
            <Header />
        </div>
        
         <div className="">
            <WishlistContainer movieIDs={movieIDs}  clearMovieIDs={clearMovieIDs}/>
            
            
            
        </div>
       </div>
    );
}

export default WishlistPage;
