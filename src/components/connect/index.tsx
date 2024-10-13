import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export const Connect = () => {
  return (
    <div className="w-screen bg-connectSection p-10 text-primaryTextColor md:px-52">
      <div className="flex flex-col gap-6 py-20 md:flex-row">
        <div className="font-bigShoulders text-[90px] font-bold leading-none md:text-[220px]">
          <p>LET'S</p>
          <p>WORK</p>
          <p>TOGETHER</p>
        </div>
        <div className="flex flex-col items-start justify-center text-lg md:pl-10 md:text-2xl">
          <p className="mb-8 md:mb-16">
            Passionate about creating impactful solutions? Get in touch to
            explore how we can collaborate !
          </p>
          <div className="mb-8 flex items-center">
            <FaEnvelope className="mr-4 text-[24px]" />
            <a
              href="mailto:anavaradha.sankar@gmail.com"
              className="text-base hover:underline md:text-xl"
            >
              anavaradha.sankar@gmail.com
            </a>
          </div>
          <div className="mb-8 flex items-center">
            <FaGithub className="mr-4 text-[24px]" />
            <a
              href="https://github.com/anavaradha-sankar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base hover:underline md:text-xl"
            >
              anavaradha-sankar
            </a>
          </div>
          <div className="mb-8 flex items-center">
            <FaPhone className="mr-4 text-[24px]" />
            <a
              href="tel:+41762231123"
              className="text-base hover:underline md:text-xl"
            >
              +41 76 223 11 23
            </a>
          </div>
          <div className="mb-8 flex items-center">
            <FaLinkedin className="mr-4 text-[24px] md:text-xl" />
            <a
              href="https://www.linkedin.com/in/anavaradha-sankar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base hover:underline md:text-xl"
            >
              anavaradha-sankar
            </a>
          </div>
          <div className="mb-8 flex items-center">
            <FaInstagram className="mr-4 text-[24px]" />
            <a
              href="https://www.instagram.com/das.ist.sankar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base hover:underline md:text-xl"
            >
              @das.ist.sankar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
