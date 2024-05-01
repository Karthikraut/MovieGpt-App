import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/movieSlice';
import { OPTIONS } from '../utils/constants';

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies= async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular',OPTIONS);
    const jsonData =await data.json();
    console.log(" Popular Movies: ",jsonData.results);
    dispatch(addPopularMovies(jsonData.results));
  }

  useEffect(()=>{
    popularMovies();
  },[]);
}

export default usePopularMovies;