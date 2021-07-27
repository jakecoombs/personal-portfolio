import { NextPage } from "next";
import { withUrqlClient, WithUrqlProps } from "next-urql";
import React from "react";
import { PageLayout } from "src/components/molecules/PageLayout";
import { ResetPassword } from "src/components/organisms/forms/ResetPassword";
import { createUrqlClient } from "src/utils/createUrqlClient";

const ChangePassword: NextPage<WithUrqlProps> = ({ pageProps }) => {
  return (
    <PageLayout headTitle="Reset Password">
      <ResetPassword token={pageProps.token} />
    </PageLayout>
  );
};

ChangePassword.getInitialProps = ({ query }) => {
  return {
    pageProps: { token: query.token as string },
  };
};

export default withUrqlClient(createUrqlClient, { ssr: false })(ChangePassword);
