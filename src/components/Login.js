import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] =useState(true);
    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div className=''>
        <Header/>
        <div className='absolute' >
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg'
            alt='logo'
            />
        </div>
        <form className='p-12 absolute bg-black w-3/12 mx-auto text-white right-0 left-0 mt-40 z-0'>
            <h1 className='text-3xl font-bold py-4 '>{isSignInForm? "Sign In":"Sign Up"}</h1>
            <input type=' text' placeholder='Email Address' className='p-2 my-4 w-full bg-gray-600 outline-none'/>
            {!isSignInForm && <input type='text' placeholder='Full Name' className='p-2 my-4 w-full outline-none  bg-gray-600'/>}
            <input type='password' placeholder='Password' className='p-2 my-4 w-full outline-none  bg-gray-600'/>
            <button className='p-4 my-4 bg-red-700 w-full'>{isSignInForm? "Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now":"Already registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login