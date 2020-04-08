import React from "react";
// import content from "content/content";
// import Projects from "components/Projects/Projects";
import Page from "components/Page/Page";
import "./Post.css";

function Post(props) {

  return (
    <div>
      <Page>
        <h2>{props.blog.md }</h2>
      </Page>
    </div>
  );
}

export default Post;
