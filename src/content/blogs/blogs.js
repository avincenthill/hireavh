const recruiterFaq = require("./md/recruiter-faq.md");
const readme = require("./md/README.md");

const blogs = {
  title: "✍️ AVH blog",
  data: [
    // *************************************************************************
    {
      title: "Recruiter FAQ",
      url: "blog/recruiter-faq",
      description: "Answers to common questions I get from recruiters.",
      md: recruiterFaq,
      img: {
        emoji: "🤷",
      },
    },
    // *************************************************************************
    {
      title: "README.md",
      url: "blog/readme",
      description: "The rendered readme for this web app (hireavh.com).",
      md: readme,
      img: {
        emoji: "📒",
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
  return path.replace("blog/", "").replace("-", "");
};
const blogPaths = blogs.data.map((blog) => cleanupPath(blog.url));

const blogLookup = {};
blogPaths.forEach((path, index) => {
  blogLookup[path] = index;
});

const lookupBlogFromUrl = (path) => {
  return blogs.data[blogLookup[cleanupPath(path)]];
};

export { blogs, lookupBlogFromUrl };
