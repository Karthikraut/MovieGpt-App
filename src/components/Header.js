import React from 'react'
import { NETFLIX_LOGO } from '../utils/constants'

const Header = () => {
  return (
    <div className='absolute z-10  bg-gradient-to-b from-black w-full'>
        <img className='w-44' src= {NETFLIX_LOGO}
        alt='logo'/>
    </div>
  )
}

export default Header