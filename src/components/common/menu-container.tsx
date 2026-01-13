import { useState } from "react";

interface MenuContainerProps {
  bannerRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  connectRef: React.RefObject<HTMLDivElement>;
}

const MenuContainer: React.FC<MenuContainerProps> = ({
  bannerRef,
  aboutRef,
  experienceRef,
  skillsRef,
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

  const menuItems = [
    { label: "HOME", sectionRef: bannerRef },
    { label: "ABOUT ME", sectionRef: aboutRef },
    { label: "EXPERIENCE", sectionRef: experienceRef },
    { label: "SKILLS", sectionRef: skillsRef },
    { label: "CONNECT", sectionRef: connectRef },
  ];

  return (
    <>
      <div
        className={`fixed bottom-16 left-1/2 w-[66%] -translate-x-1/2 transform bg-menuDropdownBg transition-transform duration-300 ease-out sm:w-[50%] ${
          isOpen ? "translate-y-0" : "translate-y-[calc(100%+4rem)]"
        } z-30`}
      >
        <div className="flex flex-col p-8 text-menuItemTextColor sm:flex-row sm:p-16 md:flex-row">
          <div className="w-full border-menuBorderColor font-bigShoulders text-2xl font-bold sm:w-[60%] sm:border-r-2 sm:text-6xl">
            <ul className="mb-4 space-y-4 sm:mb-0">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-menuItemHoverColor"
                  onClick={() => handleScrollToSection(item.sectionRef)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex-row flex-col items-center justify-center border-t-2 border-menuBorderColor pb-6 pt-6 sm:flex sm:w-[40%] sm:border-t-0 sm:pb-0 sm:pl-11 sm:pt-0">
            <p className="mb-8 text-sm md:text-2xl">
              Building Solutions, one line of code at a time – Grab my CV for
              the full story!
            </p>
            <a
              href="/Anavaradha Sankar Resume 2026.pdf"
              download="Anavaradha Sankar Resume 2026.pdf"
              className="inline-block w-auto rounded-full border border-transparent bg-primaryAccent px-6 py-2 text-xs font-semibold text-primaryTextColor transition duration-300 ease-in-out md:text-xl"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 left-1/2 z-30 mb-4 w-[200px] -translate-x-1/2 transform rounded-lg bg-menuContainerBg px-4 py-3 shadow-lg sm:w-[230px] md:px-6 md:py-4">
        <div className="flex h-full w-full flex-row items-center">
          <button
            onClick={() => handleScrollToSection(bannerRef)}
            className="basis-[65%] border-r-2 border-primaryAccent pr-1 text-left text-xs font-bold text-secondaryTextColor focus:outline-none md:pr-1 md:text-sm"
          >
            ANAVARADHA SANKAR
          </button>

          <div className="flex basis-[35%] flex-col justify-center">
            <button
              onClick={handleClick}
              className={`flex flex-col items-end justify-center ${
                isOpen ? "" : "gap-1.5"
              }`}
            >
              <span
                className={`block h-[3px] rounded-sm bg-primaryAccent transition-all duration-300 ease-out ${
                  isOpen
                    ? "w-8 translate-y-[3px] rotate-45 md:w-10"
                    : "w-6 -translate-y-[1.5px] md:w-8"
                }`}
              ></span>
              <span
                className={`block h-[3px] rounded-sm bg-primaryAccent transition-all duration-300 ease-out ${
                  isOpen ? "w-8 opacity-0 md:w-10" : "w-8 opacity-100 md:w-10"
                }`}
              ></span>
              <span
                className={`block h-[3px] rounded-sm bg-primaryAccent transition-all duration-300 ease-out ${
                  isOpen
                    ? "w-8 -translate-y-[3px] -rotate-45 md:w-10"
                    : "w-4 translate-y-[1.5px] md:w-6"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuContainer;
