import React from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import "./Page.css";

function Page({ children }) {
  return (
    <div>
      <Header></Header>
      <div className="page-container">{children}</div>
      <Footer></Footer>
    </div>
  );
}

export default Page;
