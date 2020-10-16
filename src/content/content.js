import { blogs } from './blogs/blogs';
import form from './form/form';
import projects from './projects/projects';
import sorts from './sorts/sorts';

const currentDate = new Date();

const content = {
  projects,
  blogs,
  sorts,
  form,
};

content.nav = {
  links: {
    home: { emoji: '🏠', path: 'about' },
    blog: { emoji: '✍️', path: 'blog' },
    projects: { emoji: '📦', path: 'projects' },
    resume: { emoji: '📄', path: 'resume' },
    contact: { emoji: '📇', path: 'contact' },
  },
};

content.about = {
  title1: '👋 Hi there -',
  title2: "I'm Alex and I'm a software engineer",
  p1: 'Partner with me to help build your business!',
};

content.contact = {
  name: `👨‍💻 Alex "AVH" Vincent-Hill`,
  email: 'alexanderjvincenthill@gmail.com',
  cell: '(541) 602-9122',
  linkedin: 'linkedin.com/in/avincenthill',
  github: 'github.com/avincenthill',
  site: {
    path: '/home',
    displayUrl: 'hireavh.com',
  },
  resume: 'resume',
  cta: 'Buy me a coffee:',
};

content.resume = {
  cta: '📥 download',
  downloadName: `Resume_Alex_AVH_Vincent-Hill.pdf`,
  path: 'assets/pdf/avh_resume.pdf',
};

content.notFound = {
  title: '🤦 That page is missing, sorry!',
};

content.header = {
  title: `${content.nav.links.home.emoji} ${content.nav.links.home.path}`,
  switchOptions: ['☀️', '🌙'],
};

content.footer = {
  copywrite: `copyright Alex Vincent-Hill ${currentDate.getFullYear()} - ${
    content.header.title
  }`,
};

export default content;
