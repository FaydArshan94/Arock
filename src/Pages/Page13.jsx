import React from 'react'

const Page13 = () => {
    const arr = [{h1:"PERSONAL",h5: "Honesty, Communication, Punctuality"},{h1:"PROFESSIONAL",h5:"Photoshop, Wix Studio, Figma"},{h1:"ADDITIONAL",h5:"Business Development, Branding, SEO"}]

    return (
      <div className="w-full h-screen relative z-30 bg-white pl-3 pr-4 py-5 mt-12">
        <div className="w-full h-full rounded-[50px] overflow-hidden relative bg-rd-900">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover object-center"
            src="https://video.wixstatic.com/video/11062b_fc7c8b8125a94b69ad7cad3b24a8093a/720p/mp4/file.mp4"
          ></video>
  
          <div  className="absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            {arr.map((item,index)=>{
              return <div key={index} className="text-center py-6">
              <h1 className="text-[12vw] tracking-wide leading-[9vw] font-[anzo5] text-white">
                {item.h1}
              </h1>
              <h5 className="text-[1.3vw] font-[anzo4] text-zinc-400">
                {item.h5}
              </h5>
              </div>
            })}
          </div>
        </div>
      </div>
    );
}

export default Page13
