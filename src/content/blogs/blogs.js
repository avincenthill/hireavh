const recruiterFaq = require("./md/recruiter-faq.md");
const readme = require("./md/README.md");
const marketing = require("./md/marketing.md");

const blogs = {
  title: "✍️ My markdown, rendered.",
  data: [
    // *************************************************************************
    {
      title: "Recruiter FAQ",
      url: "blog/recruiter-faq",
      description: "Answers to common questions I get from recruiters.",
      longDescription: `This is an attempt to save recruiters and myself some time. I'd noticed I kept having the same 30 minute intro call with recruiters and wanted to provide an asynchronous resource for this info. I still would love to talk to you!`,
      md: recruiterFaq,
      img: {
        emoji: "🤷",
      },
    },
    // *************************************************************************
    {
      title: "Marketing Consulting",
      url: "/blog/marketing",
      displayUrl: "hireavh.com/blog/marketing",
      description: "Super-charging your business with Google Ads!",
      longDescription: `Here is a short description of the digital marketing services that I can offer to businesses. Contact me for more info!`,
      img: {
        emoji: "💼",
      },
    },
    // *************************************************************************
    {
      title: "hireavh.com How-to",
      url: "blog/readme",
      description: "The rendered README.md for this web app",
      longDescription: `I decided to render the README.md for this website since it was already in markdown. If you'd like to see an example of how I write technical documentation, just click!`,
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
