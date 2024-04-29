import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { OPTIONS } from '../utils/constants';
import { addMovieTrailerKey } from '../utils/movieSlice';
const useMovieTrailer = (movieId ) => {
    const dispatch =useDispatch();

    //Fetching trailer video data and storing it to store
    const trendingMovie = async ()=>{
     
      const data =await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, OPTIONS)
      const json = await data.json();
   
      const filterData = json.results.filter((video)=> video.type === "Trailer")
      dispatch(addMovieTrailerKey(filterData[0].key))
  
    }
    useEffect(()=>{
      trendingMovie();
    },[])
  
}

export default useMovieTrailer