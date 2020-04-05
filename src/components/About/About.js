import React from "react";
import content from "../../content/content";
import headshot from "../../assets/img/headshot.png";
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
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function About() {
  return (
    <div className="about">
      <Header></Header>
      <div className="about-container">
        <img src={headshot} alt="headshot"></img>
        <h2>{content.about.subtitle}</h2>
        <p>{content.about.p1}</p>
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
      </div>
      <Footer></Footer>
    </div>
  );
}

export default About;
