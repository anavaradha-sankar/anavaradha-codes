import { useRef } from "react";
import { Banner } from "../components/banner";
import { About } from "../components/about";
import { Experience } from "../components/experience";
import { Connect } from "../components/connect";
import MenuContainer from "../components/common/menu-container";
import { Skills } from "../components/skills";

export const Home = () => {
  const bannerRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const connectRef = useRef(null);

  return (
    <div className="flex flex-col">
      <div ref={bannerRef}>
        <Banner />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={connectRef}>
        <Connect />
      </div>

      <MenuContainer
        bannerRef={bannerRef}
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        skillsRef={skillsRef}
        connectRef={connectRef}
      />
    </div>
  );
};
