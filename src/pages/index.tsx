import { Introduction } from "../components/organisms/Introduction/Introduction";
import { Projects } from "../components/organisms/Projects/Projects";
import { Technologies } from "../components/organisms/Technologies/Technologies";
import { HelloPanel } from "../components/molecules/HelloPanel";
import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "src/utils/createUrqlClient";
import { PageLayout } from "src/components/molecules/PageLayout";

const IndexPage = () => {
  const router = useRouter();

  console.log(router.asPath);

  return (
    <PageLayout headTitle="Home">
      <HelloPanel />
      <Introduction />
      <Projects />
      <Technologies />
    </PageLayout>
  );
};

export default withUrqlClient(createUrqlClient)(IndexPage);
