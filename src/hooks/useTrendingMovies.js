import React, { useDebugValue, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTrendingMovies } from '../utils/movieSlice';
import { OPTIONS } from '../utils/constants';

const useTrendingMovies = () => {
    const dispatch = useDispatch();

  const trendingMovies = async()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated",OPTIONS)
    const jsonData =await data.json();
    console.log(" Trending Movies: ",jsonData.results);
    dispatch(addTrendingMovies(jsonData.results));
  } 

    useEffect(()=>{
        trendingMovies();
    },[])
}

export default useTrendingMovies;