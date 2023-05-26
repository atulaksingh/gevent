import Footer from "components/shared/Footer";
import Header from "components/shared/Header";
import Head from 'next/head';
import React from "react";

const Layout = ({ children, title = "PanacheMedia" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav className="fixed top-0 left-0 right-0 z-30">
        <Header />
      </nav>
      <main>{children}</main>
      <footer>
        <div className="">
          <Footer />
        </div>
      </footer>
    </>
  );
};

export default Layout;
