import React from "react";
import content from "content/content.js";
import Link from "components/Link/Link";
import "components/Projects/Projects.css";

class Projects extends React.Component {
  renderProjects = () => {
    return content.projects.projects.map((project, index) => {
      const backgroundImgStyle = {
        "background-image": `url(${project.img.module})`,
      };
      return (
        <div className="project-container" key={index}>
          <div className="project-img-container">
            {project.img.hasImg ? (
              <div
                className="project-img"
                style={backgroundImgStyle}
                alt={project.img.emoji}
              ></div>
            ) : (
              <span className="project-emoji">{project.img.emoji}</span>
            )}
          </div>
          <div className="project-info-container">
            <div className="project-title">
              <Link title={project.title} path={project.url}></Link>
            </div>
            <p className="project-description">{project.description}</p>
            <a className="project-url" href={project.url}>
              {project.displayUrl}
            </a>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="projects">
        <hr></hr>
        <h2 className="projects-subtitle">{content.projects.subtitle}</h2>
        <div className="projects-container">{this.renderProjects()}</div>
      </div>
    );
  }
}

export default Projects;
