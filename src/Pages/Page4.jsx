import React from 'react'

const Page4 = () => {
  return (
    <div className='w-full h-screen pl-3 pr-4 py-5'>
      <div className='w-full flex items-center justify-between px-20 pt-10  h-full bg-cover bg-center bg-[url("C:\Users\pc\OneDrive\Documents\webD\Arock\src\assets\pngegg.png")] rounded-[30px]'>
        <div>
        <div className=''>
            <h1 className='text-[20vw] text-[#9B9B9B] font-[anzo5]  leading-[16vw]'>WHAT</h1>
            <h1 className='text-[20vw]  text-white font-[anzo5] leading-[16vw]'>I DO</h1>
        </div>
        <div className='mt-3'>
            <h1 className='text-white font-[anzo1] text-lg leading-5'>I DESIGN AND DEVELOP</h1>
            <h1 className='text-gray-400 font-[anzo3] text-lg leading-5'>MODERN, IMPACTFUL AND LUXURIOUS</h1>
            <h1 className='text-white font-[anzo1] text-lg leading-6'>
            websites that seamlessly bridge your goals with needs of your clients.</h1>
        </div>
        </div>
        <div className='h-[30vw] mr-24 w-[30vw] relative z-20 flex items-start justify-between'>
            <img className='w-full h-full relative z-10' src="src\assets\earth.png" alt="" />
            <img className='w-1/2 absolute top-0 -right-28 h-2/4 z-0' src="src\assets\pngwing.com.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Page4
