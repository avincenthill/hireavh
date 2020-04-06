import projects from "./projects/projects";

const currentDate = new Date();

const content = {
  about: {
    subtitle: "👋 Hi, I'm AVH!",
    p1: "Hire me to help build your business with this tech and more!",
  },
  resume: {
    cta: "download 📥",
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
    links: [
      { title: "🏠 home", path: "about" },
      { title: "📄 resume", path: "resume" },
      { title: "👨‍💻 contact", path: "contact" },
    ],
  },
  header: {
    title: "hireavh.com 🏠",
  },
  footer: {
    copywrite: `copyright Alex Vincent-Hill ${currentDate.getFullYear()} - 🏠`,
  },
  notFound: {
    title: "🤦 That page is missing, sorry!",
    subtitle: "🏠 return",
  },
};

export default content;
