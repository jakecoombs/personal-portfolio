import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import { PageLayout } from "src/components/molecules/PageLayout";
import { createUrqlClient } from "src/utils/createUrqlClient";
import styled from "styled-components";
import { ArrowLink } from "../../components/molecules/ArrowLink";
import { CreatePost } from "../../components/organisms/Api/CreatePost";
import { useLogoutMutation, useMeQuery } from "../../generated/graphql";

const ApiTestPage = () => {
  const [{ fetching: isLogoutFetching }, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery();
  let body = null;
  const router = useRouter();

  if (fetching) {
    // data fetching
  } else if (!data?.me) {
    // user not logged in
    router.push("/test-api/login");
  } else {
    // user is logged in
    body = (
      <>
        <h1>Welcome to the Api Test Suite {data.me.username}</h1>
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

export default withUrqlClient(createUrqlClient)(ApiTestPage);
