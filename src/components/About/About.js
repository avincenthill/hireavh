import React from "react";
import content from "../../content/content";
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
import styleconfig from "../../styles/styleconfig";
import Page from "../Page/Page";

function About() {
  return (
    <div className="about">
      <Page>
        <h2>{content.about.subtitle}</h2>
        <p className="about-p">{content.about.p1}</p>
        <div className="about-icons-container">
          <IconContext.Provider value={{ style: styleconfig.icons.tech }}>
            <FaReact />
            <FaJsSquare />
            <FaNodeJs />
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
      </Page>
    </div>
  );
}

export default About;
