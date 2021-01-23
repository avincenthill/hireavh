import './About.css';
import { NavList } from 'components/Nav/Nav';
import Page from 'components/Page/Page';
import React from 'react';
import content from 'content/content';

function About() {
  return (
    <div className="about">
      <Page>
        <h1 className="about-hero" data-testid="about-hero">
          {content.about.title1}
        </h1>
        <h1 className="about-hero-2">{content.about.title2}</h1>
        <p className="about-p">{content.about.p1}</p>
        <NavList></NavList>
        <hr></hr>
      </Page>
    </div>
  );
}

export default About;
