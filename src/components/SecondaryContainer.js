import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies)
  console.log(" trendingMovies ", movies.trendingMovies);
  console.log(" popularMovies: ", movies.popularMovies);
  return movies.nowPlayingMovies && movies.trendingMovies && movies.popularMovies && (
    <div className=' bg-black'>
      <div className='z-20  relative m-3'>
      <MovieList title={"Now Playing Movies"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Trending Movies"} movies={movies?.trendingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies?.popularMovies}/>
      </div>
      {/* 
        MovieList - Popular
          MovieCard * n
        MovieList - Now Playing
        MovieList - Trending
        MovieList - Horror
      */}
    </div>
  )
}

export default SecondaryContainer