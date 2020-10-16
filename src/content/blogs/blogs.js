// const recruiterFaq = require("./md/recruiter-faq.md");
const readme = require('./md/README.md');
const marketing = require('./md/marketing.md');
const coverage = require('./md/coverage.md');

const blogs = {
  title: '✍️ My markdown, rendered.',
  data: [
    // *************************************************************************
    // TBD: DEPRECATED, rewrite for next job search when necessary
    // {
    //   title: "Recruiter FAQ",
    //   url: "blog/recruiter-faq",
    //   description: "Answers to common questions I get from recruiters.",
    //   longDescription: `An attempt to save you, the recruiter, some time, with a centralized resource answering the most common questions I receive during screening calls.  I'm looking forward to speaking with you further!`,
    //   md: recruiterFaq,
    //   img: {
    //     emoji: "🤷",
    //   },
    // },
    // *************************************************************************
    {
      title: 'Marketing Consulting',
      url: 'blog/marketing',
      displayUrl: 'hireavh.com/blog/marketing',
      description: 'Maximizing your ROI with Google Ads!',
      longDescription: `Here is a short description of the digital marketing services that I can offer to businesses. Contact me for more info!`,
      md: marketing,
      img: {
        emoji: '💼',
      },
    },
    // *************************************************************************
    {
      title: 'hireavh.com README.md',
      url: 'blog/readme',
      longDescription: `I decided to render the README.md for this website since it was already in markdown. If you'd like to see an example of how I write technical documentation, just click!`,
      md: readme,
      img: {
        emoji: '📒',
      },
    },
    // *************************************************************************
    {
      title: 'hireavh.com Test Coverage Report',
      url: 'blog/test-coverage',
      longDescription: `This is the current test coverage for the website you are currently using. Jest and Enzyme are used to unit test this application and Istanbul is used to create the report.`,
      md: coverage,
      img: {
        emoji: '🧪',
      },
    },
    // *************************************************************************
  ],
};

/*
BLOG LOOKUP
turn array of blog info into object with paths as keys and blog info as values,
use lookupBlogFromUrl to get blog object with url
*/
const cleanupPath = (path) => {
  return path.replace('blog/', '').replace('-', '');
};

const lookupBlogFromUrl = (path, json) => {
  const blogLookup = {};
  json.data
    .map((blog) => cleanupPath(blog.url))
    .forEach((path, index) => {
      blogLookup[path] = index;
    });

  return json.data[blogLookup[cleanupPath(path)]];
};

export { blogs, lookupBlogFromUrl };
