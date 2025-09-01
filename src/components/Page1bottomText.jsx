import { useGSAP } from '@gsap/react'
import gsap, { Linear } from 'gsap'
import React from 'react'
const 
Page1bottomText = () => {

  useGSAP(()=>{
    gsap.to("#banner img",{
      rotate: "360deg",
      duration:6,
      repeat:-1,
      ease: "linear"
    })
  })
  return (
    <div className='flex relative mt-32  items-center gap-[64vw] text-white justify-between'>
      <div>
      <h1 className='text-lg font-[anzo4] leading-none' >BRAND DESIGN | WEBSITE DESIGN</h1>
      <h1 className=' text-lg font-thin text-zinc-500 leading-none'>BESPOKE FREELANCE</h1>
      </div>
    </div>
  )
}

export default Page1bottomText
