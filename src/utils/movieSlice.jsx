import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo:null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state , action)=>{
            state.trailerVideo =action.payload;
        }
    }
});

export const {addTrailerVideo, addNowPlayingMovies }=movieSlice.actions;

export default movieSlice.reducer