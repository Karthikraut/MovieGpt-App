import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'


const MainContainer = () => {
  const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
  if(movies===null) return; //This is Known as early return

  const mainMovie = movies[1];

  const {original_name,original_title ,overview, id}= mainMovie;
  return (
    <div className=''>
      <VideoTitle title={original_name || original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;