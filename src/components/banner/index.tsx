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
    <div className="text-bannerTextColor relative m-0 flex h-screen w-screen flex-col items-center justify-center bg-bannerSection">
      <div className="relative mb-4 flex flex-col items-start items-center">
        <p
          className={`relative z-10 mb-14 font-bigShoulders text-[90px] font-extrabold leading-none transition-all duration-300 ease-in-out sm:text-[90px] md:animate-moveRight md:text-[180px] lg:mb-0 lg:text-[220px] ${
            isScrolled ? "scale-110 transform" : "scale-100 transform"
          }`}
        >
          SOLUTION
        </p>
        <p
          className={`relative z-30 font-bigShoulders text-[90px] font-extrabold leading-none transition-all duration-300 ease-in-out sm:text-[90px] md:animate-moveLeft md:text-[180px] lg:text-[220px] ${
            isScrolled ? "scale-110 transform" : "scale-100 transform"
          }`}
        >
          BUILDER
        </p>
        <img
          src={sankarPic}
          alt="Anavaradha Sankar"
          className="absolute top-[55%] z-20 h-auto w-[70%] -translate-y-1/2 transform object-cover object-center sm:w-[60%] md:w-[50%] lg:top-[45%] lg:w-[400px]"
        />
      </div>
    </div>
  );
};
