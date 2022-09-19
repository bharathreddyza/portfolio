import type { NextComponentType } from "next";

import Link from "next/link";

const Projects: NextComponentType = () => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white"> Projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
      <Link href="https://quick-feature.vercel.app/" passHref>
          <a
            className="h-[10rem] w-[18rem]  cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold"> Quick feature</p>
              <p>A No-code tool  to wireframe ideas using plain HTML,Css,javascript built using react.js,Typescript</p>
            </div>
          </a>
        </Link>
        <Link href="https://rocky-dusk-01259.herokuapp.com/" passHref>
          <a
            className="h-[10rem] w-[18rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold"> reddit clone</p>
              <p>A Fullstack Reddit clone built using Typescript,React.js,MongoDb,Node.js</p>
            </div>
          </a>
        </Link>
        
        <Link href="https://daohunt-frontend.vercel.app/" passHref>
          <a
            className="h-[10rem] w-[18rem]  cursor-pointer rounded-lg bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Daohunt <p className="text-sm ">[EthGlobal daoHack top15]</p></p>
              <p>Decentralised Dao analytics and review site built  IPFS and orbitDB</p>
            </div>
          </a>
        </Link>

        <Link href="https://youtube-frontend-beta.vercel.app/" passHref>
          <a
            className="h-[10rem] w-[18rem]  cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">  Youtube clone</p>
              <p>A full-stack Youtube clone built with react.js,Redux toolkit,node.js,mongoDB,express,firebase</p>
            </div>
          </a>
        </Link>

       

         
      </div>
    </div>
  );
};

export default Projects;
