import "./Post.css";
import { NavList } from "components/Nav/Nav";
import Page from "components/Page/Page";
import React from "react";
import { Remarkable } from "remarkable";

class Post extends React.Component {
  constructor(props) {
    super(props);
    fetch(this.props.blog.md)
      .then((res) => res.text())
      .then((mdString) => {
        this.setState((state) => ({ ...state, mdString }));
      })
      .catch((err) => {
        // TBD throw error
      });
  }

  renderMdFile = () => {
    if (this.state && this.state.mdString) {
      const remarkable = new Remarkable();
      const html = remarkable.render(this.state.mdString);
      return <div dangerouslySetInnerHTML={{ __html: html }} />;
    }
  };

  render() {
    return (
      <Page>
        <div id="md-container">{this.renderMdFile()}</div>
        <hr></hr>
        <div className="post-nav">
          <NavList></NavList>
        </div>
      </Page>
    );
  }
}

export default Post;
