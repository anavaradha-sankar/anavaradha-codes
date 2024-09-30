import { useState } from "react";

interface FooterBoxProps {
  bannerRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
  connectRef: React.RefObject<HTMLDivElement>;
}

const FooterBox: React.FC<FooterBoxProps> = ({
  bannerRef,
  aboutRef,
  experienceRef,
  connectRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <div
        className={`fixed left-1/2 bottom-16 transform -translate-x-1/2 w-[66%] sm:w-[50%]  bg-black transition-transform duration-300 ease-out ${
          isOpen ? "translate-y-0" : "translate-y-[calc(100%+4rem)]"
        }  z-30`}
      >
        <div className="flex flex-col sm:flex-row md:flex-row p-8 sm:p-16 text-white">
          <div className="font-bigShoulders font-bold text-2xl sm:text-6xl w-full sm:w-[60%] border-customGray  sm:border-r-2 ">
            <ul className="space-y-4 mb-4 sm:mb-0">
              <li
                className="hover:text-customRed cursor-pointer"
                onClick={() => handleScrollToSection(bannerRef)}
              >
                HOME
              </li>
              <li
                className="hover:text-customRed cursor-pointer"
                onClick={() => handleScrollToSection(aboutRef)}
              >
                ABOUT ME
              </li>
              <li
                className="hover:text-customRed cursor-pointer"
                onClick={() => handleScrollToSection(experienceRef)}
              >
                EXPERIENCE
              </li>
              <li
                className="hover:text-customRed cursor-pointer"
                onClick={() => handleScrollToSection(connectRef)}
              >
                CONNECT
              </li>
            </ul>
          </div>
          <div className="flex-row sm:flex flex-col w-full sm:w-[40%] items-center justify-center pt-6 sm:pt-0 pb-6 sm:pb-0 sm:pl-11 border-customGray border-t-2 sm:border-t-0">
            <p className="text-sm md:text-2xl mb-8">
              Building Solutions, one line of code at a time – Grab my CV for
              the full story!
            </p>
            <a
              href="/Anavaradha Sankar Resume 2024.pdf" // Path to your CV
              download="Anavaradha Sankar Resume 2024.pdf" // The name of the file for download
              className="bg-white text-black text-xs md:text-xl font-semibold py-2 px-6 rounded-full border border-transparent hover:border-black hover:bg-gray-100 transition duration-300 ease-in-out w-auto inline-block"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 mb-4 bg-white rounded-lg shadow-lg w-[200px] sm:w-[230px] px-4 md:px-6 py-3 md:py-4 z-30">
        <div className="flex flex-row h-full w-full items-center">
          <button
            onClick={() => handleScrollToSection(bannerRef)}
            className="basis-[65%] text-xs md:text-sm font-bold border-r-2 border-customRed focus:outline-none text-left pr-1 md:pr-1"
          >
            ANAVARADHA SANKAR
          </button>

          <div className="basis-[35%] flex flex-col justify-center">
            <button
              onClick={handleClick}
              className={`flex flex-col justify-center items-end ${
                isOpen ? "" : "gap-1.5"
              }`}
            >
              <span
                className={`bg-customRed block transition-all duration-300 ease-out 
                  rounded-sm h-[3px] ${
                    isOpen
                      ? " w-8 md:w-10 rotate-45 translate-y-[3px]"
                      : " w-6 md:w-8 -translate-y-[1.5px]"
                  }`}
              ></span>
              <span
                className={`bg-customRed block transition-all duration-300 ease-out 
                  rounded-sm h-[3px] ${
                    isOpen
                      ? " w-8 md:w-10 opacity-0"
                      : " w-8 md:w-10 opacity-100"
                  }`}
              ></span>
              <span
                className={`bg-customRed block transition-all duration-300 ease-out 
                  rounded-sm h-[3px] ${
                    isOpen
                      ? "w-8 md:w-10 -rotate-45 -translate-y-[3px]"
                      : "w-4 md:w-6 translate-y-[1.5px]"
                  }`}
              ></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBox;
