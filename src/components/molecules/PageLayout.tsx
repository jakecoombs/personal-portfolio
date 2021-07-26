import Head from "next/head";
import { ReactNode } from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header";

interface IPageLayoutProps {
  children?: ReactNode;
  headTitle?: string;
}

export const PageLayout = ({ children, headTitle }: IPageLayoutProps) => {
  return (
    <>
      <Head>
        <title>{headTitle ? `${headTitle} | ` : ""}Jake Coombs</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};
