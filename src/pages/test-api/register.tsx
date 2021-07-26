import { withUrqlClient } from "next-urql";
import React from "react";
import { PageLayout } from "src/components/molecules/PageLayout";
import { createUrqlClient } from "src/utils/createUrqlClient";
import { Register } from "../../components/organisms/Api/Register";

const RegisterPage = () => {
  return (
    <PageLayout headTitle="Register">
      <Register />
    </PageLayout>
  );
};

export default withUrqlClient(createUrqlClient)(RegisterPage);
