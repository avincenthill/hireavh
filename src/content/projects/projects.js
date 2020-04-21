import sorts from "content/sorts/sorts";
import particles from "assets/img/projects/particles.jpg";
import graphicDesign from "./graphicDesign";

const projects = {
  title: "📦 Here are some of my projects!",
  data: [
    // *************************************************************************
    {
      title: "Recruiter FAQ",
      url: "/blog/recruiter-faq",
      displayUrl: "/blogs/recruiter-faq",
      description: "Answers to common questions I get from recruiters.",
      longDescription: `This is an attempt to save recruiters and myself some time - I'd noticed I kept having the same 30 minute intro call with recruiters and wanted to provide a resource to conduct this info-transfer asynchronously. I still want to talk to you!`,
      img: {
        emoji: "🤷",
      },
    },
    // *************************************************************************
    {
      title: "Particle Simulation",
      url: "https://github.com/avincenthill/particle_simulation",
      displayUrl: "github.com/avincenthill/particle_simulation",
      description: "A particle system simulation in Processing.",
      img: {
        hasImg: true,
        module: particles,
        emoji: "📦",
      },
    },
    // *************************************************************************
    {
      title: sorts.title,
      url: "/sorting-algorithms",
      displayUrl: "hireavh.com/sorting-algorithms",
      description: "Animated bogosort!",
      img: {
        emoji: sorts.emoji,
      },
    },
    // *************************************************************************
    {
      title: "Media Automation",
      url:
        "https://marketingplatform.google.com/about/resources/fetch-and-aeg-presents-boost-efficiency-with-structured-information-files/",
      displayUrl: "marketingplatform.google.com",
      description: "100x'ing Google Ads campaign creation...",
      img: {
        emoji: "⚙️",
      },
    },
    // *************************************************************************
    {
      title: "Marketing Consulting",
      url: "/blog/marketing",
      displayUrl: "hireavh.com/blog/marketing",
      description: "Super-charging your business with Google Ads!",
      img: {
        emoji: "💼",
      },
    },
    // *************************************************************************
    {
      title: "Dynamic Form",
      url: "/dynamic-form",
      displayUrl: "hireavh.com/form",
      description: "Rendering a form based on input JSON.",
      img: {
        emoji: "📃",
      },
    },
    // *************************************************************************
    {
      title: "Leetcode Answers",
      url:
        "https://github.com/avincenthill/leetcode-answers/tree/master/leetcode-answers",
      displayUrl:
        "https://github.com/avincenthill/leetcode-answers/tree/master/leetcode-answers",
      description: "A collection of my JS implementations from leetcode.com.",
      img: {
        emoji: "🧩",
      },
    },
    // *************************************************************************
    {
      title: "AVH Blog",
      url: "/blog",
      displayUrl: "hireavh.com/blog",
      description: "My thoughts on the world...",
      img: {
        emoji: "✍️",
      },
    },
    // *************************************************************************
    {
      title: "Graphic Design",
      url: "/graphic-design",
      displayUrl: "hireavh.com/graphic-design",
      description: "A collection of my published work.",
      img: {
        emoji: "🎨",
      },
    },
    // *************************************************************************
    {
      title: "Online Chess",
      url: "https://lichess.org/@/avincenthill/perf/rapid",
      displayUrl: "lichess.org",
      description: "Challenge me on lichess.org!",
      img: {
        emoji: "♟️",
      },
    },
  ],
  graphicDesign,
};

export default projects;
