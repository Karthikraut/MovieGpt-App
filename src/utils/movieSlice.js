import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState:{
        nowPlayingMovies: null,
        movieTrailerKey:null
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies =action.payload;
        },
        addMovieTrailerKey: (state,action)=>{
            state.movieTrailerKey =action.payload;
        }
    }
})
export const {addNowPlayingMovies,addMovieTrailerKey} = movieSlice.actions;
export default movieSlice.reducer;