import { useEffect, useState } from "react";
import sankarPic from "../../assets/sankar-headshot.png";

export const Banner = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen bg-customRed flex flex-col items-center m-0 justify-center pb-16">
      <div className="relative flex flex-col items-start items-center mb-4">
        <p
          className={`font-bigShoulders text-[90px] sm:text-[90px] md:text-[180px] lg:text-[220px] text-white font-extrabold md:animate-moveRight leading-none relative z-10 mb-14 lg:mb-0 transition-all duration-300 ease-in-out ${
            isScrolled ? "transform scale-110" : "transform scale-100"
          }`}
        >
          SOLUTION
        </p>
        <p
          className={`font-bigShoulders text-[90px] sm:text-[90px] md:text-[180px] lg:text-[220px] text-white font-extrabold md:animate-moveLeft leading-none relative z-30 transition-all duration-300 ease-in-out ${
            isScrolled ? "transform scale-110" : "transform scale-100 "
          }`}
        >
          BUILDER
        </p>
        <img
          src={sankarPic}
          alt="Anavaradha Sankar"
          className="absolute transform -translate-y-1/2 top-[55%] lg:top-[45%] w-[70%] sm:w-[60%] md:w-[50%] lg:w-[400px] h-auto object-cover object-center z-20"
        />
      </div>
    </div>
  );
};
