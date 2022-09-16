import type { NextComponentType } from "next";

import Link from "next/link";

const Projects: NextComponentType = () => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white"> Projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <Link href="https://github.com/bharathreddyza/DAOHunt" passHref>
          <a
            className="h-[10rem] w-[18rem]  cursor-pointer rounded-lg bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">daohunt</p>
              <p>Decentralised Dao analytics and review site built  IPFS and orbitDB</p>
            </div>
          </a>
        </Link>

        <Link href="https://github.com/bharathreddyza/decentralizedVideoPlayer" passHref>
          <a
            className="h-[10rem] w-[18rem]  cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold"> Decentralised Youtube</p>
              <p>A decentalised video player built upon IPFS and Next.js</p>
            </div>
          </a>
        </Link>

        <Link href="https://github.com/bharathreddyza/quick-feature" passHref>
          <a
            className="h-[10rem] w-[18rem]  cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold"> Quick feature</p>
              <p>A No-code tool  to wireframe ideas using plain HTML,Css,javascript built using next.js,Typescript</p>
            </div>
          </a>
        </Link>
        <Link href="https://github.com/bharathreddyza/quick-feature" passHref>
          <a
            className="h-[10rem] w-[18rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold"> reddit clone</p>
              <p>A Fullstack reddit clone built using Typescript,Next.js,graphQL,postgres</p>
            </div>
          </a>
        </Link>

         
      </div>
    </div>
  );
};

export default Projects;
