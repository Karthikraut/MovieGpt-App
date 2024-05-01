import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState:{
        nowPlayingMovies: null,
        movieTrailerKey:null,
        trendingMovies: null,
        popularMovies: null
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies =action.payload;
        },
        addMovieTrailerKey: (state,action)=>{
            state.movieTrailerKey =action.payload;
        },
        addTrendingMovies: (state,action)=>{
            state.trendingMovies = action.payload
        },
        addPopularMovies: (state,action)=>{
            state.popularMovies = action.payload
        }
    }
})
export const {addNowPlayingMovies,addMovieTrailerKey,addPopularMovies,addTrendingMovies} = movieSlice.actions;
export default movieSlice.reducer;