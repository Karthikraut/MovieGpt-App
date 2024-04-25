import React, { useState,useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header'
import { checkValidateData } from '../utils/validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase";
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
const Login = () => {
    const [isSignInForm, setIsSignInForm] =useState(true);
    const email= useRef();
    const password = useRef();
    const name = useRef();
    const [errorMsg, setErrorMsg] = useState();
    const dispatch = useDispatch();
    const navigate =useNavigate();

    const handleButtonClick = ()=>{
        //Validate the form data
        const message = checkValidateData(email.current.value,password.current.value);
        setErrorMsg(message);
        if(message) return;
        console.log("hELLO")
        //Sign In Sign Up Logic
        if(!isSignInForm){
            //Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up    
                const user = userCredential.user;     
                console.log(" Error line 1");
                updateProfile(user, {
                    displayName: name.current.value
                })
                    .then(()=>{
                        const {uid, email, displayName} =user;
                        dispatch(addUser({uid:uid,email:email,displayName: displayName}));
                        navigate('/browse');
                    })
                    .catch((error)=>{
                        setErrorMsg(error);
                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorCode, " - ",errorMessage);
                // ..
            }); 
        }
        else{
            //Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
               
                const user = userCredential.user;
               
                const {uid, email, displayName} =user;
                dispatch(addUser({uid:uid,email:email,displayName: displayName}));
               
                navigate('/browse');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorCode," - ", errorMessage);
            });
        }
    }
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
        <form onSubmit={(e)=>e.preventDefault()} className='p-12 absolute bg-black w-3/12 mx-auto text-white right-0 left-0 mt-40 z-0'>
            <h1 className='text-3xl font-bold py-4' >
                {isSignInForm? "Sign In":"Sign Up"}</h1>
            <input type='text' ref={email} placeholder='Email Address' className='p-2 my-4 w-full bg-gray-600 outline-none'/>
            {!isSignInForm && <input type='text' ref={name} placeholder='Full Name' className='p-2 my-4 w-full outline-none  bg-gray-600'/>}
            <input type='password' ref={password} placeholder='Password' className='p-2 my-4 w-full outline-none  bg-gray-600'/>
            <p className='text-red-500 text-lg p-2'>{errorMsg}</p>
            <button className='p-4 my-4 bg-red-700 w-full' onClick={handleButtonClick}>
                {isSignInForm? "Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now":"Already registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login
