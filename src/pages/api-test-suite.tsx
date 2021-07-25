import { ArrowLink } from "../components/molecules/ArrowLink";
import Head from "next/head";
import { CreatePost } from "../components/organisms/Api/CreatePost";
import { Login } from "../components/organisms/Api/Login";

const ApiTestPage = () => {
  return (
    <>
      <Head>
        <title>API | Jake Coombs</title>
      </Head>
      <h1>Api Test Suite</h1>
      <h3>
        This is an API Test Suite built using GraphQL and deployed using Heroku.
        <br />
        Feel free to try it out and see how it works.
      </h3>
      <Login />
      <CreatePost />
      <ArrowLink
        url="https://github.com/jcoombs235"
        text="Visit the GitHub Repo powering this page"
      />
    </>
  );
};

export default ApiTestPage;
