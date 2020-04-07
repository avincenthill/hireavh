import React from "react";
import "components/Projects/Projects.css";

class Projects extends React.Component {
  renderProjects = () => {
    return this.props.projects.map((project, index) => {
      const backgroundImgStyle = {
        "backgroundImage": `url(${project.img.module})`,
      };
      return (
        <div className="project-container" key={index}>
          <a href={project.url} className="project-img-container">
            {project.img.hasImg ? (
              <div
                className="project-img"
                style={backgroundImgStyle}
                alt={project.img.emoji}
              >

              </div>
            ) : (
              <span className="project-emoji">{project.img.emoji}</span>
            )}
          </a>
          <div className="project-info-container">
            <h2 className="project-title"><a className="project-title-link"  href={project.url}>{project.title}</a></h2>
            <p className="project-description">{project.description}</p>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="projects">
        <div className="projects-container">{this.renderProjects()}</div>
      </div>
    );
  }
}

export default Projects;
