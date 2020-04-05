const currentDate = new Date();

const content = {
  about: {
    title: "Hire AVH!",
    subtitle: "👋 Hi, I'm AVH!",
    p1: "Hire me to help build your business with this tech and more!",
  },
  resume: {
    cta: "Click to download!",
    downloadName: `Resume_Alex Vincent-Hill_${currentDate.toDateString()}.pdf`,
  },
  nav: {
    links: [{ title: "Resume" }, { title: "Contact" }, { title: "Projects" }],
  },
  footer: {
    copywrite: `Copywrite Alex Vincent-Hill ${currentDate.getFullYear()}`,
  },
  notFound: {
    title: "🤦 That page is missing, sorry!",
    subtitle: "Return",
  },
};

export default content;
