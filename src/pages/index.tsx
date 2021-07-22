import { Introduction } from "../components/organisms/Introduction/Introduction";
import { Projects } from "../components/organisms/Projects/Projects";
import { Technologies } from "../components/organisms/Technologies/Technologies";
import Head from "next/head";
import { HelloPanel } from "../components/molecules/HelloPanel";

const IndexPage = () => (
  <>
    <Head>
      <title>Jake Coombs</title>
    </Head>
    <HelloPanel />
    <Introduction />
    <Projects />
    <Technologies />
  </>
);

export default IndexPage;
