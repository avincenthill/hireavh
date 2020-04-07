import particles from "assets/img/projects/particles.png";
import sorting from "assets/img/projects/sorting.png";
import nsa from "assets/img/projects/nsa.png";
import hilbert from "assets/img/projects/hilbert.png";
import petals from "assets/img/projects/petals.png";

const projects = {
  data: [
    // *************************************************************************
    {
      title: "particle simulation",
      url: "https://github.com/avincenthill/particle_simulation",
      displayUrl: "github.com/avincenthill/particle_simulation",
      description: "A particle system simulation in Processing...",
      img: {
        hasImg: true,
        module: particles,
        emoji: "📦",
      },
    },
    // *************************************************************************
    {
      title: "media automation",
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
      title: "sorting algorithms",
      url: "/sorting",
      displayUrl: "hireavh.com/sorting",
      description: "Sorting algos animated...",
      img: {
        hasImg: true,
        module: sorting,
        emoji: "📦",
      },
    },
    // *************************************************************************
    {
      title: "marketing consulting",
      url: "/marketing",
      displayUrl: "hireavh.com/marketing",
      description: "Super-charging your business with Google Ads...",
      img: {
        emoji: "💼",
      },
    },
    // *************************************************************************
    {
      title: "AVH blog",
      url: "/blog",
      displayUrl: "hireavh.com/blog",
      description: "My thoughts on the world...",
      img: {
        emoji: "✍️",
      },
    },
    // *************************************************************************
    {
      title: "educate yourself",
      url: "http://shirt.woot.com/offers/educate-yourself",
      displayUrl: "shirt.woot.com/offers/educate-yourself",
      description: "Graphic design for woot.com...",
      img: {
        hasImg: true,
        module: nsa,
        emoji: "📦️",
      },
    },
    // *************************************************************************
    {
      title: "grand hilbert",
      url: "http://shirt.woot.com/offers/hilberts-grand-infinite-hotel",
      displayUrl: "shirt.woot.com/offers/hilberts-grand-infinite-hotel",
      description: "Graphic design for woot.com...",
      img: {
        hasImg: true,
        module: hilbert,
        emoji: "📦️",
      },
    },
    // *************************************************************************
    {
      title: "petals logo",
      url: "http://www.pictureperfectpetals.com/about",
      displayUrl: "pictureperfectpetals.com",
      description: "Graphic design for Picture Perfect Petals...",
      img: {
        hasImg: true,
        module: petals,
        emoji: "📦️",
      },
    },
    // *************************************************************************
    {
      title: "online chess",
      url: "https://lichess.org/@/avincenthill/perf/rapid",
      displayUrl: "lichess.org",
      description: "Challenge me on lichess.org...",
      img: {
        emoji: "♟️",
      },
    },
  ],
};

export default projects;
