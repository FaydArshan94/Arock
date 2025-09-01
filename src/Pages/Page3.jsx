import React from "react";

const Page3 = () => {
  return (
    <div className="w-full mt-10 h-screen bg-white relative flex items-center justify-center">
      <img
        className="relative z-20"
        src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_890,h_512,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png"
        alt=""
      />
      <div className=" absolute bg-red-900 h-[33vw] z-10 w-[50vw]">
        <video
          muted
          autoPlay
          loop
          className="absolute h-full object-cover object-center"
          src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4"
        ></video>
      </div>


      <div className="h-0.5 bg-zinc-600 top-[40%] absolute z-0 w-2/3 ">
      </div>
      <div className="h-0.5 bg-zinc-600 top-[60%] absolute z-0 w-3/4 ">
      </div>
      <div className="h-0.5 bg-zinc-600 top-[80%] absolute z-0 w-5/6 ">
      </div>
    </div>
  );
};

export default Page3;
