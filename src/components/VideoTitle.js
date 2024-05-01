import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className=''>
      <div className='w-screen h-screen  pt-[20%] px-8  absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold py-2'>{title}</h1>
        <h1 className='w-1/3 text-base'>{overview}</h1>
        <div className='mt-10'>
            <button className='bg-[#d9242e] text-white p-4 px-12 rounded-lg mx-2 hover:bg-opacity-50'>Play</button>
            <button className='bg-[#d9242e] text-white p-4 px-12 rounded-lg mx-2 hover:bg-opacity-50'>More Info</button>
        </div>
    </div>
    </div>
  )
}

export default VideoTitle