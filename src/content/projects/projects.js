import sorts from "content/sorts/sorts";
import particles from "assets/img/projects/particles.jpg";
import nsa from "assets/img/projects/nsa.jpg";
import hilbert from "assets/img/projects/hilbert.jpg";
import petals from "assets/img/projects/petals.jpg";

const projects = {
  data: [
    // *************************************************************************
    {
      title: "Recruiter FAQ",
      url: "/blog/recruiter-faq",
      displayUrl: "/blogs/recruiter-faq",
      description: "Answers to common questions I get from recruiters.",
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
      url: "/sorting",
      displayUrl: "hireavh.com/sorting",
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
      title: "Educate Yourself",
      url: "http://shirt.woot.com/offers/educate-yourself",
      displayUrl: "shirt.woot.com/offers/educate-yourself",
      description: "Graphic design for woot.com.",
      img: {
        hasImg: true,
        module: nsa,
        emoji: "📦️",
      },
    },
    // *************************************************************************
    {
      title: "Grand Hilbert",
      url: "http://shirt.woot.com/offers/hilberts-grand-infinite-hotel",
      displayUrl: "shirt.woot.com/offers/hilberts-grand-infinite-hotel",
      description: "Graphic design for woot.com.",
      img: {
        hasImg: true,
        module: hilbert,
        emoji: "📦️",
      },
    },
    // *************************************************************************
    {
      title: "Petals Logo",
      url: "http://www.pictureperfectpetals.com/about",
      displayUrl: "pictureperfectpetals.com",
      description: "Graphic design for Picture Perfect Petals.",
      img: {
        hasImg: true,
        module: petals,
        emoji: "📦️",
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
};

export default projects;
