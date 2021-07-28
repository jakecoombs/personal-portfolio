import { withUrqlClient } from "next-urql";
import React from "react";
import { PageLayout } from "src/components/molecules/PageLayout";
import { ForgotPassword } from "src/components/organisms/forms/ForgotPassword";
import { createUrqlClient } from "src/utils/createUrqlClient";

const ResetPasswordPage = () => {
  return (
    <PageLayout headTitle="Reset Password">
      <ForgotPassword />
    </PageLayout>
  );
};

export default withUrqlClient(createUrqlClient)(ResetPasswordPage);
