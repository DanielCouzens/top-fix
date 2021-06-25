import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/styles.scss";

const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      <div className="pseudo-header"></div>
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
