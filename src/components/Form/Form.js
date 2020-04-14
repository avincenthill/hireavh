import React from "react";
// import content from "content/content";
import Page from "components/Page/Page";
import { NavList } from "components/Nav/Nav";
import "./Form.css";

class Form extends React.Component {
  render() {
    return (
      <div>
        <Page>
          <h2 className="default-title">Form</h2>
          <NavList></NavList>
          <hr></hr>
        </Page>
      </div>
    );
  }
}

export default Form;
