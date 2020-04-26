import sorts from "content/sorts/sorts";
import form from "content/form/form";
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
      longDescription: `This is an attempt to save recruiters and myself some time. I'd noticed I kept having the same 30 minute intro call with recruiters and wanted to provide an asynchronous resource for this info. I still would love to talk to you!`,
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
      longDescription: `This is a personal project where I model chemical and physical reactions (chemical equilibria, fission, classical collisions, etc) with Processing/Java and render the simulation using PeasyCam. Clicking this link will take you to the source code - you need to install Processing in order to run it.`,
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
      longDescription: `You can see common sorting algorithms rendered with HTML canvas here. This is a personal project that I'm continuing to expand on as I study more sorting algorithms. It's open source, just like this website!`,
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
      longDescription: `This is a link to a case study Google/Doubleclick wrote about digital ad campaign creation automation work I led at Fetch circa 2017-2018.`,
      img: {
        emoji: "⚙️",
      },
    },
    // *************************************************************************
    {
      title: "Dynamic Form",
      url: "/dynamic-form",
      displayUrl: "hireavh.com/form",
      description: "Rendering a form based on input JSON.",
      longDescription: form.description,
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
      longDescription: `This is the GitHub repo where I control my answers to leetcode questions, mostly implemented in JavaScript. I've tried to also include data about runtime and memory after they were run successfully in the application.`,
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
      longDescription: `This is an eclectic collection of my written work. I don't blog that often but if I want to personally publish something I do it here.`,
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
      longDescription: `There are some of my graphic design pieces in the field. I'm experienced with Adobe Photoshop and Illustrator and love to make things look nice!`,
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
      longDescription: `I like to play chess in my spare time - here is a link to my profile on lichess.org!`,
      img: {
        emoji: "♟️",
      },
    },
  ],
  graphicDesign,
};

export default projects;
