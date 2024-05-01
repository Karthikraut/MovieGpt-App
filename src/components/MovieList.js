import React from 'react'
import { API_CDN_URL } from '../utils/constants'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return(movies===null)?<h1>Wait for few second</h1>:(
    <div className='px-6 mb-48'>
        <div className='-my-36 z-50 mx-0'>
          <h1 className='z-50 mx-2 text-3xl text-white font-bold'>{title}</h1>
          <div className='flex overflow-x-scroll no-scrollbar'>
            <div className='flex'>
            {movies?.map((movie) =>
            <MovieCard  posterPath={movie.poster_path}/>
            )}
            </div>
          </div>
        </div>
    </div>
  )
}

export default MovieList