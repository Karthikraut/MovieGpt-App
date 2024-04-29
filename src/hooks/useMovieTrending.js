import { useEffect } from 'react';
import { OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';

const useMovieTrending =()=>{
    const dispatch =useDispatch();

    const movieTrending = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', OPTIONS);
        const jsonData =await data.json();
      
        dispatch(addNowPlayingMovies(jsonData.results));    
      }
      useEffect(() => {
        movieTrending();
      },[])
    
}
export default useMovieTrending;