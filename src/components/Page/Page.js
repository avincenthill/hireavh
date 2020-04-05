import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
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
