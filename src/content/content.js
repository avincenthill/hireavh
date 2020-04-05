const currentDate = new Date();

const content = {
  about: {
    title: "Hire AVH!",
    subtitle: "👋 Hi, I'm AVH!",
    p1: "Hire me to build your business with this tech and more!",
  },
  nav: {
    links: [{ title: "Resume" }, { title: "Contact" }, { title: "Projects" }],
  },
  footer: {
    copywrite: `Copywrite Alex Vincent-Hill ${currentDate.getFullYear()}`,
  },
  notFound: {
    title: "404 Not Found",
    subtitle: "Return",
  },
};

export default content;
