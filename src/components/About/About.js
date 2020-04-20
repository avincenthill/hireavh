import React from "react";
import content from "content/content";
import "./About.css";
import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaVuejs,
  FaGit,
  FaNpm,
  FaCss3Alt,
  FaHtml5,
  FaAws,
  FaAdobe,
  FaLinux,
  FaUbuntu,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import styleconfig from "styles/styleconfig";
import Page from "components/Page/Page";
import Projects from "components/Projects/Projects";
import { NavList } from "components/Nav/Nav";

function About() {
  return (
    <div className="about">
      <Page>
        <h1 className="about-hero">{content.about.title1}</h1>
        <h1>{content.about.title2}</h1>
        <p className="about-p">{content.about.p1}</p>
        <div className="about-icons-container">
          <div>
            <IconContext.Provider value={{ style: styleconfig.icons.techHero }}>
              <FaReact />
              <FaJsSquare />
              <FaNodeJs />
            </IconContext.Provider>
          </div>
          <div>
            <IconContext.Provider value={{ style: styleconfig.icons.tech }}>
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
        <Projects projects={content.projects.data}></Projects>
        <NavList></NavList>
        <hr></hr>
      </Page>
    </div>
  );
}

export default About;
