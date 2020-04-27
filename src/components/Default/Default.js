import "./Default.css";
import { NavList } from "components/Nav/Nav";
import Page from "components/Page/Page";
import React from "react";
// import content from "content/content";

class Default extends React.Component {
  render() {
    return (
      <div>
        <Page>
          <h2 className="default-title">Default</h2>
          <NavList></NavList>
          <hr></hr>
        </Page>
      </div>
    );
  }
}

export default Default;
