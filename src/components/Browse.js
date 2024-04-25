import React from 'react'
import Header from './Header'
import { removeUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Browse = () => {
  const navigate =useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=>store.user)
  const signOutFunction =()=>{  
    dispatch(removeUser());
    navigate('/');
  }
  return (
    <>
    <div className='flex justify-end'>
      <Header/>
      <div>
      <button onClick={signOutFunction} className='z-10 text-white bg-red-500 text-bold text-lg h-10 w-20 p-1 mt-4 mx-4'>Sign Out</button>
        {user && <h1 className='mx-4'>{user?.displayName}</h1>}
      </div>
    </div>
    </>
  )
}

export default Browse