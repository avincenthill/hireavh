import { blogs } from 'content/blogs/blogs';
import form from 'content/form/form';
import graphicDesign from './graphicDesign';
import particles from 'assets/img/projects/particles.jpg';
import sorts from 'content/sorts/sorts';

const projects = {
  title: '📦 Here are some of my projects!',
  data: [
    // *************************************************************************
    // Recruiter FAQ
    // TBD: DEPRECATED, rewrite for next job search when necessary
    // blogs.data[0],
    // *************************************************************************
    {
      title: 'Particle Simulation',
      url: 'https://github.com/avincenthill/particle_simulation',
      displayUrl: 'github.com/avincenthill/particle_simulation',
      description: 'A particle system simulation in Processing.',
      longDescription: `PERSONAL PROJECT: Modeling chemical and physical reactions (chemical equilibria, fission, classical collisions, etc) with Processing/Java and rendering the simulation using PeasyCam. This link will lead to the source code, and you will need to install Processing to run it.`,
      img: {
        hasImg: true,
        module: particles,
        emoji: '📦',
      },
    },
    // *************************************************************************
    {
      title: sorts.title,
      url: '/sorting-algorithms',
      displayUrl: 'hireavh.com/sorting-algorithms',
      description: 'Animated bogosort!',
      longDescription: sorts.description,
      img: {
        emoji: sorts.emoji,
      },
    },
    // *************************************************************************
    {
      title: 'Media Automation',
      url:
        'https://marketingplatform.google.com/about/resources/fetch-and-aeg-presents-boost-efficiency-with-structured-information-files/',
      displayUrl: 'marketingplatform.google.com',
      description: "100x'ing Google Ads campaign creation...",
      longDescription: `FETCH: Unprecedented work that I led which automated the creation of digital ad campaigns and featured in a case study written by Google.`,
      img: {
        emoji: '⚙️',
      },
    },
    // *************************************************************************
    // Marketing Consulting
    blogs.data[0],
    // *************************************************************************
    {
      title: 'Todo List',
      url: '/todo',
      displayUrl: 'hireavh.com/todo',
      description:
        'A dopamine-triggering daily to-do list with selections persisting in localStorage.',
      longDescription:
        "Tasks get cleared on date day-changes or when you clear localStorage. That's about all!",
      img: {
        emoji: '☑️',
      },
    },
    // *************************************************************************
    {
      title: 'Dynamic Form',
      url: '/dynamic-form',
      displayUrl: 'hireavh.com/form',
      description: 'Rendering a form based on input JSON.',
      longDescription: form.description,
      img: {
        emoji: '📃',
      },
    },
    // *************************************************************************
    {
      title: 'Leetcode Answers',
      url:
        'https://github.com/avincenthill/leetcode-answers/tree/master/leetcode-answers',
      displayUrl:
        'https://github.com/avincenthill/leetcode-answers/tree/master/leetcode-answers',
      description: 'A collection of my JS implementations from leetcode.com.',
      longDescription: `PERSONAL PROJECT: This is the GitHub repo where I control my answers to leetcode questions, mostly implemented in JavaScript. I've tried to also include data about runtime and memory after they were run successfully in the application.`,
      img: {
        emoji: '🧩',
      },
    },
    // *************************************************************************
    {
      title: 'Graphic Design',
      url: '/graphic-design',
      displayUrl: 'hireavh.com/graphic-design',
      description: 'A collection of my published work.',
      longDescription: `There are some of my graphic design pieces in the field. I'm experienced with Adobe Photoshop and Illustrator and love to make things look nice!`,
      img: {
        emoji: '🎨',
      },
    },
    // *************************************************************************
    {
      title: 'Online Chess',
      url: 'https://lichess.org/@/avincenthill/perf/rapid',
      displayUrl: 'lichess.org',
      description: 'Challenge me on lichess.org!',
      longDescription: `I like to play chess in my spare time - here is a link to my profile on lichess.org!`,
      img: {
        emoji: '♟️',
      },
    },
  ],
  graphicDesign,
};

export default projects;
