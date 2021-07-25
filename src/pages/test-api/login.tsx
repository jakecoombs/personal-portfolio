import Head from "next/head";
import React from "react";
import { Login } from "../../components/organisms/Api/Login";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login | Jake Coombs</title>
      </Head>
      <Login />
    </>
  );
};

export default LoginPage;
