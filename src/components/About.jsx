import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-400">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-white">
              O mnie
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-right text-4xl font-bold">Witaj, jestem Tomek</p>
          </div>
          <div>
            <p>Jestem absolwentem kierunku Globalny biznes, Finanse i Zarządzanie na
                SGH. Obecnie kontynuuje edukację na szczeblu magisterskim, na kierunku
                Zarządzanie Nieruchomościami. Naukę programowania rozpocząłem w marcu
                2021 roku, po opanowaniu JS6 w lutym 2022 rozpocząłem naukę React.js i
                związanych z nim framework'ów.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
