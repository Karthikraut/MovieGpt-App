import React, { useEffect } from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {
  useMovieTrailer(movieId);
  const trailerKey =useSelector((store)=> store.movies.movieTrailerKey)
  console.log("TRAILER KEY ", trailerKey)
  return (
    <div className='w-screen h-screen' >
      <iframe className="w-full h-full aspect-video " 
      src={"https://www.youtube.com/embed/"+ trailerKey +"?si=UT93PrJ4A2HRyf36"+ "?&autoplay=1" }  
      title="YouTube video player"  
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      style={{ border: "none" }}
      allowFullScreen
      >
      </iframe>
    </div>
  )
}

export default VideoBackground