import React from 'react'
import { API_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-36 m-3'>
         <img  alt='Movie Poster' src= {API_CDN_URL+posterPath} />
    </div>
  )
}

export default MovieCard