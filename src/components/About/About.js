import "./About.css";
import {
  FaAdobe,
  FaAws,
  FaCss3Alt,
  FaGit,
  FaHtml5,
  FaJsSquare,
  FaLinux,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaUbuntu,
  FaVuejs,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { NavList } from "components/Nav/Nav";
import Page from "components/Page/Page";
import ProjectList from "components/ProjectList/ProjectList";
import React from "react";
import content from "content/content";
import styleconfig from "styles/styleconfig";

function About() {
  return (
    <div className="about">
      <Page>
        <h1 className="about-hero" data-testid="about-hero">
          {content.about.title1}
        </h1>
        <h1 className="about-hero-2">{content.about.title2}</h1>
        <p className="about-p">{content.about.p1}</p>
        <div className="about-icons-container">
          <div>
            <IconContext.Provider
              value={{
                style: {
                  ...styleconfig.icons.xl,
                  ...styleconfig.icons.techHero,
                },
              }}
            >
              <FaReact />
              <FaJsSquare />
              <FaNodeJs />
            </IconContext.Provider>
          </div>
          <div>
            <IconContext.Provider
              value={{
                style: {
                  ...styleconfig.icons.s,
                  ...styleconfig.icons.tech,
                },
              }}
            >
              <FaVuejs />
              <FaNpm />
              <FaGit />
              <FaCss3Alt />
              <FaHtml5 />
              <FaAws />
              <FaAdobe />
              <FaLinux />
              <FaUbuntu />
            </IconContext.Provider>
          </div>
        </div>
        <NavList></NavList>
        <hr></hr>
        <h2>{content.projects.title}</h2>
        <ProjectList projects={content.projects.data}></ProjectList>
      </Page>
    </div>
  );
}

export default About;
