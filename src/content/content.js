import projects from "./projects/projects";
import { blogs } from "./blogs/blogs";

const currentDate = new Date();

const content = {
  projects,
  blogs,
};

content.nav = {
  links: {
    home: { emoji: "🏠", path: "home" },
    blog: { emoji: "✍️", path: "blog" },
    resume: { emoji: "📄", path: "resume" },
    contact: { emoji: "📇", path: "contact" },
  },
};

content.about = {
  subtitle: "👋 Hi, I'm Alex and I'm a software engineer",
  subtitle2: "📦 Here are some of my projects!",
  p1: "Partner with me to help build your business!",
};

content.contact = {
  name: `👨‍💻 Alex "AVH" Vincent-Hill`,
  email: "alexanderjvincenthill@gmail.com",
  cell: "(541) 602-9122",
  linkedin: "linkedin.com/in/avincenthill",
  github: "github.com/avincenthill",
  site: "hireavh.com",
  resume: "resume",
};

content.resume = {
  cta: "📥 download",
  downloadName: `Resume_Alex Vincent-Hill_${currentDate.toDateString()}.pdf`,
  path: "assets/pdf/avh_resume.pdf",
};

content.notFound = {
  title: "🤦 That page is missing, sorry!",
  subtitle: `${content.nav.links.home.emoji} ${content.nav.links.home.path}`,
};

content.header = {
  title: `${content.nav.links.home.emoji} ${content.nav.links.home.path}`,
};

content.footer = {
  copywrite: `copyright Alex Vincent-Hill ${currentDate.getFullYear()} - ${
    content.header.title
  }`,
};

export default content;
