import { Banner } from "../components/banner";
import { About } from "../components/about";
import { Experience } from "../components/experience";
import { Connect } from "../components/connect";
import FooterBox from "../components/common/footer-box";

export const Home = () => (
  <div className="flex flex-col">
    <Banner />
    <About />
    <Experience />
    <Connect />
    <FooterBox />
  </div>
);
