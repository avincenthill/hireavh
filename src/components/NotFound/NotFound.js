import './NotFound.css';
import { NavList } from 'components/Nav/Nav';
import Page from 'components/Page/Page';
import React from 'react';
import content from 'content/content';

function NotFound() {
  return (
    <div>
      <Page>
        <h1 className="notFound-title">{content.notFound.title}</h1>
        <NavList></NavList>
        <hr></hr>
      </Page>
    </div>
  );
}

export default NotFound;
