import { About } from "../components/organisms/About/About";
import { Introduction } from "../components/organisms/Introduction/Introduction";
import { MainHeader } from "../components/organisms/MainHeader/MainHeader";
import { Projects } from "../components/organisms/Projects/Projects";
import { Technologies } from "../components/organisms/Technologies/Technologies";

const IndexPage = () => (
  <>
    <MainHeader />
    <Introduction />
    <Projects />
    <Technologies />
    <About />
  </>
);

export default IndexPage;
