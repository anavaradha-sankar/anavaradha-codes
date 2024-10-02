import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Connect = () => {
  return (
    <div className="w-screen bg-customGradient3 text-white  p-10 md:px-52 ">
      <div className="py-20 flex flex-col md:flex-row  gap-6">
        <div className="font-bigShoulders text-[90px] md:text-[220px] leading-none font-bold">
          <p>LET'S</p>
          <p>WORK</p>
          <p>TOGETHER</p>
        </div>
        <div className="flex flex-col text-lg md:text-2xl justify-center items-start md:pl-10">
          <p className="mb-8 md:mb-16">
            Passionate about creating impactful solutions? Get in touch to
            explore how we can collaborate !
          </p>
          <div className="flex items-center mb-8">
            <FaEnvelope className="text-[24px] mr-4" />
            <a
              href="mailto:anavaradha.sankar@gmail.com"
              className="text-base md:text-xl hover:underline"
            >
              anavaradha.sankar@gmail.com
            </a>
          </div>
          <div className="flex items-center mb-8">
            <FaPhone className="text-[24px] mr-4" />
            <a
              href="tel:+41762231123"
              className="text-base md:text-xl hover:underline"
            >
              +41 76 223 11 23
            </a>
          </div>
          <div className="flex items-center mb-8">
            <FaLinkedin className="text-[24px] md:text-xl mr-4" />
            <a
              href="https://www.linkedin.com/in/anavaradha-sankar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-xl hover:underline"
            >
              anavaradha-sankar
            </a>
          </div>
          <div className="flex items-center mb-8">
            <FaInstagram className="text-[24px] mr-4" />
            <a
              href="https://www.instagram.com/das.ist.sankar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-xl hover:underline"
            >
              @das.ist.sankar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
