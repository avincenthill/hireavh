import "./ProjectList.css";
import Project from "components/Project/Project";
import React from "react";

class ProjectList extends React.Component {
  renderProjects = (projects) => {
    if (projects) {
      return projects.map((project, index) => {
        return <Project project={project} key={index}></Project>;
      });
    }
  };

  render() {
    return (
      <div>
        <h2 className="projectlist-title">{this.props.title}</h2>
        <div className="projects-container">
          {this.props ? this.renderProjects(this.props.projects) : null}
        </div>
      </div>
    );
  }
}

export default ProjectList;
