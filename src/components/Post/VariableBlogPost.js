import { blogs, lookupBlogFromUrl } from 'content/blogs/blogs';
import Post from 'components/Post/Post';
import React from 'react';
import { useParams } from 'react-router-dom';

const VariableBlogPost = () => {
  const { path } = useParams();
  const blog = lookupBlogFromUrl(path, blogs);
  return blog ? <Post blog={blog}></Post> : <NotFound></NotFound>;
};

export default VariableBlogPost;
