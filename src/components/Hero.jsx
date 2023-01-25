import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div name="home" className="w-full bg-[#0a192f] h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-400">Nazywam się</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Tomasz Kuniewicz
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-gray-400">
          Jestem Junior Front-End Developerem
        </h2>
        <p className="text-gray-400 pt-4">
          Od marca 2022 koduję w JavaScript, CSS, React.js oraz Next.js{" "}
        </p>
        <div>
          <button>
            <Link
              to="work"
              smooth={true}
              duration={800}
              className="text-white border-2 px-6 py-3 
              my-2 flex items-center hover:bg-[#a09bd4] 
              rounded-sm hover:border-[#c1bbfc]"
            >
              Wykonane projekty <HiArrowNarrowRight className="ml-3" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
