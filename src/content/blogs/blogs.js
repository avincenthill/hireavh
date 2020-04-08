const blogs = {
  title: "✍️ AVH blog",
  data: [
    // *************************************************************************
    {
      title: "Recruiter FAQ",
      url: "blog/recruiter-faq",
      description: "Answers to common questions I get from recruiters",
      md: 'TBD',
      img: {
        emoji: "🤷",
      },
    },
  ],
};

/*
BLOG LOOKUP
lookup blog object based on path (from variable route)
this is a hack-job CMS where each blog index in `data`
has id = index in the array and blogLookup is the map
of paths to ids
*/
const cleanupPath = (path) => {
  return path.replace("blog/","").replace("-","");
}
const blogPaths = blogs.data.map(blog => cleanupPath(blog.url));

const blogLookup = {};
blogPaths.forEach((path, index) => {
  blogLookup[path]=index;
});

const lookupBlogFromUrl = (path) => {
  return blogs.data[blogLookup[cleanupPath(path)]];
}

export {blogs, lookupBlogFromUrl};
