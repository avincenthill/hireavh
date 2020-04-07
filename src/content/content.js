import projects from "./projects/projects";

const currentDate = new Date();

const content = {
  about: {
    subtitle: "👋 Hi, I'm Alex (a.k.a. AVH the software engineer)",
    subtitle2: "📦 Here are some of my projects!",
    p1: "Contact me to help build your business!",
  },
  resume: {
    cta: "📥 download",
    downloadName: `Resume_Alex Vincent-Hill_${currentDate.toDateString()}.pdf`,
    path: "assets/pdf/avh_resume.pdf",
  },
  contact: {
    name: `👨‍💻 Alex "AVH" Vincent-Hill`,
    email: "alexanderjvincenthill@gmail.com",
    cell: "(541) 602-9122",
    linkedin: "www.linkedin.com/in/avincenthill",
    github: "www.github.com/avincenthill",
    resume: "resume",
  },
  projects,
  nav: {
    links: {
      home: { emoji: "🏠", path: "home" },
      resume: { emoji: "📄", path: "resume" },
      contact: { emoji: "📇", path: "contact" },
    },
  },
};

content.notFound = {
  title: "🤦 That page is missing, sorry!",
  subtitle: `${content.nav.links.home.emoji} ${content.nav.links.home.path}`,
};

content.header = {
  title: `${content.nav.links.home.emoji} ${content.nav.links.home.path}`,
};

content.footer = {
  copywrite: `copyright Alex Vincent-Hill ${currentDate.getFullYear()} - ${content.header.title}`,
};

export default content;