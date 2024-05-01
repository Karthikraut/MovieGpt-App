import React, { useEffect } from 'react'
import Header from './Header'
import { removeUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { auth } from '../utils/firebase'
import useMovieTrending from '../hooks/useMovieTrending'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'


const Browse = () => {
  const navigate =useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=>store.user)
  const signOutFunction =()=>{  
    dispatch(removeUser());
    navigate('/');
  }

  useMovieTrending();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  useEffect(()=>{
    if(user===null ){
      navigate("/");
    }
  },[user])

  return (
    <>
    <div className='flex justify-end absolute bg-black'>
      <Header/>
      <div>
      <button onClick={signOutFunction} className='z-10 text-white bg-red-500 text-bold text-lg h-10 w-20 p-1 mt-4 mx-4'>Sign Out</button>
        {user && <h1 className='mx-4'>{user?.displayName}</h1>}
      </div>
    </div>
    {/* 
        - Main Container
            - Video Background
            - Video Title
        - Secondary Container
            - Movie List * n
              - Cards * n      
      */}
      <MainContainer/>
      <SecondaryContainer/>
    </>
  )
}

export default Browse