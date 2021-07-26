import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import { PageLayout } from "src/components/molecules/PageLayout";
import { SectionLayout } from "src/components/molecules/SectionLayout";
import { createUrqlClient } from "src/utils/createUrqlClient";
import { isServer } from "src/utils/isServer";
import styled from "styled-components";
import { ArrowLink } from "../../components/molecules/ArrowLink";
import { CreatePost } from "../../components/organisms/Api/CreatePost";
import {
  useLogoutMutation,
  useMeQuery,
  usePostsQuery,
} from "../../generated/graphql";

const ApiTestPage = () => {
  const [{ fetching: isLogoutFetching }, logout] = useLogoutMutation();
  const [{ data: userData, fetching }] = useMeQuery({
    pause: isServer(),
  });
  const [{ data: postsData }] = usePostsQuery();
  let body = null;
  const router = useRouter();

  if (fetching) {
    // data fetching
  } else if (!userData?.me) {
    // user not logged in
    body = (
      <>
        <h1>Welcome to the Api Test Suite</h1>
        <h3>
          This is an API Test Suite built using GraphQL and deployed using
          Heroku.
          <br />
          Please login to test it out.
        </h3>
        <br />
        <button
          onClick={() => {
            router.push("/test-api/login");
          }}
          disabled={isLogoutFetching}
        >
          Login
        </button>
      </>
    );
  } else {
    // user is logged in
    body = (
      <>
        <h1>Welcome to the Api Test Suite {userData.me.username}</h1>
        <h3>
          This is an API Test Suite built using GraphQL and deployed using
          Heroku.
          <br />
          Feel free to try it out and see how it works.
        </h3>
        <CreatePost />
        <button
          onClick={async () => {
            await logout();
            router.push("/");
          }}
          disabled={isLogoutFetching}
        >
          Logout
        </button>
        <SectionLayout header="Posts">
          {!postsData ? (
            <div>Loading...</div>
          ) : (
            postsData.posts.map((post) => {
              return (
                <div key={post.id}>
                  <p>{post.title}</p>
                </div>
              );
            })
          )}
        </SectionLayout>
        <LinkContainer>
          <ArrowLink
            url="https://github.com/jakecoombs"
            text="Visit the GitHub Repo for the API"
          />
        </LinkContainer>
      </>
    );
  }
  return <PageLayout headTitle="API">{body}</PageLayout>;
};

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export default withUrqlClient(createUrqlClient, { ssr: true })(ApiTestPage);
