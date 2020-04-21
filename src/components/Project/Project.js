import React from "react";
import { FaQuestionCircle, FaArrowAltCircleLeft } from "react-icons/fa";
import { IconContext } from "react-icons";
import styleconfig from "styles/styleconfig";
import "components/Project/Project.css";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingLongDescription: false,
    };
  }

  toggleLongDescription = () => {
    this.setState({
      isShowingLongDescription: !this.state.isShowingLongDescription,
    });
  };

  render() {
    const { project } = this.props;
    const backgroundImgStyle = {
      backgroundImage: `url(${project.img.module})`,
    };
    if (!this.state.isShowingLongDescription) {
      return (
        <div className="project-container">
          {project.longDescription ? (
            <button
              onClick={this.toggleLongDescription}
              className="project-expand-button"
            >
              <IconContext.Provider
                value={
                  project.img.isLightBackground
                    ? { style: styleconfig.icons.projectDark }
                    : { style: styleconfig.icons.project }
                }
              >
                {this.state.isShowingLongDescription ? (
                  <FaArrowAltCircleLeft />
                ) : (
                  <FaQuestionCircle />
                )}
              </IconContext.Provider>
            </button>
          ) : null}
          <a href={project.url} className="project-img-container">
            {project.img.hasImg ? (
              <div
                className="project-img"
                style={backgroundImgStyle}
                alt={project.img.emoji}
              ></div>
            ) : (
              <span className="project-emoji">{project.img.emoji}</span>
            )}
          </a>
          <div className="project-info-container">
            <h2 className="project-title">
              <a className="project-title-link" href={project.url}>
                {project.title}
              </a>
            </h2>
            <p className="project-description">{project.description}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="project-container">
          <button
            onClick={this.toggleLongDescription}
            className="project-expand-button"
          >
            <IconContext.Provider
              value={
                project.img.isLightBackground
                  ? { style: styleconfig.icons.projectDark }
                  : { style: styleconfig.icons.project }
              }
            >
              {this.state.isShowingLongDescription ? (
                <FaArrowAltCircleLeft />
              ) : (
                <FaQuestionCircle />
              )}
            </IconContext.Provider>
          </button>
          <a href={project.url} className="project-img-container">
            {project.img.hasImg ? (
              <div
                className="project-img"
                style={backgroundImgStyle}
                alt={project.img.emoji}
              ></div>
            ) : (
              <span className="project-emoji">{project.img.emoji}</span>
            )}
          </a>
          <div className="project-info-container">
            <p className="project-info-long-description">
              {project.longDescription}
            </p>
          </div>
        </div>
      );
    }
  }
}

export default Project;
