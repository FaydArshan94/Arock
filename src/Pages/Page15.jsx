import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Page15 = () => {
  const img = useRef(null);

  useGSAP(() => {

    gsap.registerPlugin(ScrollTrigger);

    // Animate rotating image
    gsap.to(img.current, {
      rotate: 360,
      repeat: -1,
      duration: 7,
      ease: "linear",
    });

    // Animate text color on scroll
    gsap.utils.toArray(".fade-text").forEach((el) => {
      gsap.to(el, {
        color: "#ffffff",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 50%",
          scrub: true,
          toggleActions: "play none none reverse",
          // markers: true  // enable for debugging
        },
      });
    });
  }, []);

  return (
    <div className="w-full text-white h-screen pl-3 pr-4 py-5 ">
      <div className='rounded-[30px] px-16 py-6 overflow-hidden w-full h-full bg-cover bg-[url("https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1322,h_614,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Background%20Anzo_Studio.jpg")] '>
        <div className="flex items-end justify-between">
          <div className="mt-10">
            <h1 className=" fade-text text-[19.5vw] font-extralight tracking-wide text-zinc-500 leading-[16vw] font-[anzo5]">
              GOT <span className="text-[#9B9B9B] fade-text ">AN</span> <br /> <span className="text-zinc-500 fade-text">IDEA</span>
            </h1>
          </div>
          <div className="flex h-40 items-center w-[60%] gap-10">
            <img
              ref={img}
              src="https://static.wixstatic.com/media/f1c650_7a84fb38cb2d4bebb8b34004f66d4c3d~mv2.png/v1/fill/w_91,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/World%20Contact.png"
              alt=""
            />
            <div className="w-[1.5px] h-28 bg-white"></div>
            <div>
              <h1 className=" fade-text text-lg leading-5  font-[anzo3]  text-[#9B9B9B]">
                WORLD SERVICE
              </h1>
              <h1 className=" fade-text text-lg leading-5 font-[anzo1]">
                I CAN COME TO WHEREVER YOU ARE.
              </h1>
              <h1 className=" fade-text text-lg leading-5  font-[anzo3]  text-[#9B9B9B]">
                +31 68 4564137
              </h1>
            </div>
          </div>
        </div>

        <div className="flex mt-6 items-end justify-between">
          <div>
            <h1 className="fade-text font-[anzo3] text-zinc-500 text-lg leading-5 font-thin">
              IT IS NOT JUST ABOUT SOLVING THE PROBLEM
            </h1>
            <h1 className="fade-text font-[anzo3] text-[#9B9B9B] text-lg leading-5 font-thin">
              BUT{" "}
              <span className="font-[anzo1] text-zinc-100">
                OFFERING THE TRANSFORMATION!
              </span>
            </h1>
          </div>
          <h1 className="font-[anzo1] fade-text text-zinc-300 tracking-tighter">
            © 2024 Anzo.Studio™
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page15;
