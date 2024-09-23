import sankarPic from "../../assets/sankar-headshot.png";

export const Banner = () => {
  return (
    <div className="relative w-screen h-screen bg-customRed flex flex-col items-center m-0  justify-center pb-16">
      <div className="relative flex flex-col items-start items-center">
        <p className="font-bigShoulders text-[90px] sm:text-[90px] md:text-[180px] lg:text-[220px] text-white font-extrabold md:animate-moveRight leading-none relative z-10 mb-14 lg:mb-0">
          SOLUTION
        </p>
        <p className="font-bigShoulders text-[90px] sm:text-[90px] md:text-[180px] lg:text-[220px] text-white font-extrabold md:animate-moveLeft leading-none relative z-30">
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
