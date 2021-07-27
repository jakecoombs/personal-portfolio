import { withUrqlClient } from "next-urql";
import React from "react";
import { PageLayout } from "src/components/molecules/PageLayout";
import { createUrqlClient } from "src/utils/createUrqlClient";
import { Login } from "../../components/organisms/Api/Login";

const LoginPage = () => {
  return (
    <PageLayout headTitle="Login">
      <Login />
    </PageLayout>
  );
};

export default withUrqlClient(createUrqlClient)(LoginPage);
