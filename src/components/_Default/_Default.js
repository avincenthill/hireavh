import './_Default.css';
import { NavList } from 'components/Nav/Nav';
import Page from 'components/Page/Page';
import React from 'react';
// import content from "content/content";

class _Default extends React.Component {
  render() {
    return (
      <Page>
        <div className="_default-container">
          <h1 className="_default-title">_Default Title</h1>
          <h2 className="_default-subtitle">_Default Subtitle</h2>
          <p className="_default-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            porta nisi. Mauris auctor porttitor risus non hendrerit. Etiam
            pulvinar vitae eros eu sodales. Etiam rhoncus mollis blandit.
            Curabitur at mattis mi, vitae posuere massa. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
        </div>
        <NavList></NavList>
        <hr></hr>
      </Page>
    );
  }
}

export default _Default;
