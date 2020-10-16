import './Post.css';
import { NavList } from 'components/Nav/Nav';
import Page from 'components/Page/Page';
import React from 'react';
import { Remarkable } from 'remarkable';

class Post extends React.Component {
  componentDidMount = async () => {
    const mdString = await this.fetchMd();
    this.setState({ mdString });
  };

  fetchMd = async () => {
    try {
      const res = await fetch(this.props.blog.md);
      const mdString = await res.text();
      return mdString;
    } catch (err) {
      throw new Error(err);
    }
  };

  renderMdString = () => {
    if (
      this.state &&
      this.state.mdString &&
      typeof this.state.mdString === 'string'
    ) {
      const remarkable = new Remarkable();
      const html = remarkable.render(this.state.mdString);
      return (
        <div data-testid="md-html" dangerouslySetInnerHTML={{ __html: html }} />
      );
    }
  };

  render() {
    return (
      <Page>
        <div id="md-container">{this.renderMdString()}</div>
        <hr></hr>
        <div className="post-nav">
          <NavList></NavList>
        </div>
      </Page>
    );
  }
}

export default Post;
