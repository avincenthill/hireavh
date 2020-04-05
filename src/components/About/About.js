import React from "react";
import content from "../../content/content.json";
import Nav from "../Nav/Nav";
import headshot from "../../assets/img/headshot.png";
import "./About.css";

function About() {
  return (
    <div>
      <a href={`/`}>
        <h1>{content.home.title}</h1>
      </a>
      <Nav />
      <img src={headshot} alt="headshot"></img>
      <h2>{content.home.subtitle}</h2>
      <p>{content.home.p1}</p>
      <p>{content.home.p2}</p>
    </div>
  );
}

export default About;
