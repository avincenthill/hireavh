import React from "react";
import content from "content/content";
import Projects from "components/Projects/Projects";
import Page from "components/Page/Page";
import "./Blog.css";

function Blog() {
  return (
    <div>
      <Page>
        <h2>{content.blogs.title}</h2>
        <Projects projects={content.blogs.data} ></Projects>
      </Page>
    </div>
  );
}

export default Blog;
