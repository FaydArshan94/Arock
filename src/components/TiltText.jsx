import React from "react";

const TiltText = (props) => {
  return (
    <div ref={props.abc} id="tiltDiv" className="text-white  w-fit mt-32">
          <h1 className="text-6xl font-[anzo1] leading-none  text-white ">
            I AM <span className="text-black">DARK MODE</span>™
          </h1>
          <h1 className="text-8xl font-[anzo1] leading-none">DESIGNER</h1>
          <h1 className="text-6xl font-[anzo1] leading-none text-white ">
            TO HIRE
          </h1>
        </div>
  );
};

export default TiltText;
