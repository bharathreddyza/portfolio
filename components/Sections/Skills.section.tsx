import { BsArrowRightShort } from "../Misc/Icons.collection";

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <p className="text-3xl font-bold text-white">Skills & Uses</p>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">React.js,NextJS</span>
          &nbsp;as my Frontend Frameworks
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">javascript </span>
          &nbsp;as my main languages
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Tailwind CSS,MaterialUI and ChakraUi</span>
          &nbsp;as my CSS frameworks
        </p>

        
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Express JS,GraphQl </span>
          &nbsp;as my API framework
        </p>
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">MongoDB,Postgress </span>
          &nbsp;as my  Databases
        </p>
      </div>

      <p className="text-lg font-medium text-slate-300">
        ...more skills include <span className="text-white">Typescript</span>,{" "}
        <span className="text-white">Docker</span>,{" "}
        <span className="text-white"> </span>{" "}
      </p>
    </div>
  );
};

export default Skills;
