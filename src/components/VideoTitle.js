import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-12  absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <h1 className='w-1/3 text-lg'>{overview}</h1>
        <div className='mt-10'>
            <button className='bg-[#d9242e] text-white p-4 px-12 rounded-lg mx-2 hover:bg-opacity-50'>Play</button>
            <button className='bg-[#d9242e] text-white p-4 px-12 rounded-lg mx-2 hover:bg-opacity-50'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle