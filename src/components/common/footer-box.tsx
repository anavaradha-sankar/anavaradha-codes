import { useState } from "react";
const FooterBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`fixed left-1/2 bottom-16 transform -translate-x-1/2 w-[66%] lg:w-[45%]  bg-black transition-transform duration-300 ease-out ${
          isOpen ? "translate-y-0" : "translate-y-[calc(100%+4rem)]"
        }  z-30`}
      >
        <div className="flex flex-row sm:flex-col p-8 sm:p-16 text-white">
          <div className="font-bigShoulders text-2xl sm:text-6xl w-full sm:w-[60%] border-r-2 border-customGray">
            <ul className="space-y-4 ">
              <li className="hover:text-customRed">HOME</li>
              <li className="hover:text-customRed">ABOUT ME</li>
              <li className="hover:text-customRed">EXPERIENCE</li>
              <li className="hover:text-customRed">CONNECT</li>
            </ul>
          </div>
          <div className="hidden sm:flex w-[40%]"></div>
        </div>
      </div>

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 mb-4 bg-white rounded-lg shadow-lg w-[200px] sm:w-[230px] px-4 md:px-6 py-3 md:py-4 z-30">
        <div className="flex flex-row h-full w-full items-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
