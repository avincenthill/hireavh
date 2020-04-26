import React from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import utils from "utils/utils";
import "./Page.css";

class Page extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="page-container">{this.props.children}</div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Page;
