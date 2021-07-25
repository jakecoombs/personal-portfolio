import Head from "next/head";
import React from "react";
import { Register } from "../../components/organisms/Api/Register";

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>Register | Jake Coombs</title>
      </Head>
      <Register />
    </>
  );
};

export default RegisterPage;
