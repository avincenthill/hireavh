import React from "react";
import Page from "components/Page/Page";
import { NavList } from "components/Nav/Nav";
import Projects from "components/Projects/Projects";
import "./ProjectList.css";

class ProjectList extends React.Component {
  render() {
    return (
      <div>
        <Page>
          <h2 className="projectlist-title">{this.props.title}</h2>
          <Projects projects={this.props.projectData}></Projects>
          <NavList></NavList>
          <hr></hr>
        </Page>
      </div>
    );
  }
}

export default ProjectList;
