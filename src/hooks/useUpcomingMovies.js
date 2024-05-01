import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';
import { OPTIONS } from '../utils/constants';

const useUpcomingMovies = () => {
    const dispatch =useDispatch();
    const upcomingMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming",OPTIONS);
        const jsonData =await data.json();
        dispatch(addUpcomingMovies(jsonData.results));
        console.log(" JSON RESULTS ", jsonData.results);
    }

    useEffect(()=>{
        upcomingMovies();
    },[])
}

export default useUpcomingMovies;