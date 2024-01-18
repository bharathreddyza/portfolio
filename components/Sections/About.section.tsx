import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About: NextComponentType = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold text-white">bharath</p>
        <p className="mt-1 text-lg text-gray-300">
          hey, welcome to my internet home
        </p>

        <p className="mt-4 text-gray-400">
          i am a software engineer currently building <a href="https://www.foklore.com" >foklore.com</a> <br /> 
           this site is under construction  🛠️
        </p>
        {/* <Link  href="https://drive.google.com/file/d/16crrXcz5jgyxVF1mPFhMYmXPdQ_3Is7G/view?usp=sharing"> 
       <p className="text-xl mt-4 text-gray-200 underline hover:cursor-pointer">Resume</p></Link> */}
 
      </div>

      <div className="hidden custom:block">
        <Image
          src="/assests/bharath.jpg"
          width="112"
          height="112"
          className="rounded-md"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
