import React from "react";
import content from "content/content";
import Page from "components/Page/Page";
import { NavList } from "components/Nav/Nav";
import Projects from "components/Projects/Projects";
import "./ProjectList.css";

class ProjectList extends React.Component {
  render() {
    return (
      <div>
        <Page>
          <h2 className="projectlist-title">{content.about.subtitle2}</h2>
          <Projects projects={content.projects.data}></Projects>
          <NavList></NavList>
          <hr></hr>
        </Page>
      </div>
    );
  }
}

export default ProjectList;
