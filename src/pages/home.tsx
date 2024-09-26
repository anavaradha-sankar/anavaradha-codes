import { useRef } from "react";
import { Banner } from "../components/banner";
import { About } from "../components/about";
import { Experience } from "../components/experience";
import { Connect } from "../components/connect";
import FooterBox from "../components/common/footer-box";

export const Home = () => {
  const bannerRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
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
      <div ref={connectRef}>
        <Connect />
      </div>

      <FooterBox
        bannerRef={bannerRef}
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        connectRef={connectRef}
      />
    </div>
  );
};
