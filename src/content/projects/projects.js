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
      title: 'YT Content Tool',
      url: '/youtube',
      displayUrl: 'hireavh.com/youtube',
      description: 'Quickly view most recent videos from channels by category',
      longDescription: `PERSONAL PROJECT: I wanted a better way to filter my YouTube subscriptions and see my favorite channels' newest videos aggregated by content type. Try not to exceed my API quota please!`,
      img: {
        emoji: '▶️',
      },
    },
    // *************************************************************************
    {
      title: 'Plasma Breakout',
      url: '/breakout',
      displayUrl: 'hireavh.com/breakout',
      description: 'A breakout game meets a particle system in JS.',
      longDescription: `PERSONAL PROJECT: I implemented a 2D particle system in JS and created a breakout-style game within it. This only works on desktop screen widths, sorry!`,
      img: {
        emoji: '🎱',
      },
    },
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
      longDescription: `WORK PROJECT (FETCH INC.): Unprecedented work that I led which automated the creation of digital ad campaigns and featured in a case study written by Google.`,
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
        "PERSONAL PROJECT: Your basic React.js todo list. Tasks get cleared on date day-changes or when you clear localStorage. That's about all!",
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
      url: 'https://leetcode.com/avincenthill/',
      displayUrl: 'https://leetcode.com/avincenthill/',
      description: 'My progress through LeetCode questions.',
      longDescription: `PERSONAL PROJECT: This represents the practice I've done with algorithm questions on leetcode.com, mostly in JavaScript.`,
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
      longDescription: `PERSONAL PROJECT: There are some of my graphic design pieces in the field. I'm experienced with Adobe Photoshop and Illustrator and love to make things look nice!`,
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
      longDescription: `PERSONAL PROJECT: I like to play chess in my spare time - here is a link to my profile on lichess.org!`,
      img: {
        emoji: '♟️',
      },
    },
  ],
  graphicDesign,
};

export default projects;
