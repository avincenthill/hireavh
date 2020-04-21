import React from "react";
import Project from "components/Project/Project";
import "./ProjectList.css";

class ProjectList extends React.Component {
  renderProjects = (projects) => {
    return projects.map((project, index) => {
      return <Project project={project} key={index}></Project>;
    });
  };

  render() {
    console.log(this.props);
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
