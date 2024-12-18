export const about = [
  `Hi, I'm Zach McMullen. I'm a software engineer and student from Las Vegas. 
  I'm a sophmore study computer science at Purdue University in West Lafayette, Indiana.`,
  `I'm really passionate about fullstack development with native apps and web apps. i'm also interested in machine learning and artifical intelligence, and plan to take some classes on the subject in the future.`,
  `I'm also a huge fan of open source software and I try to contribute to projects when I can and always try to make my own projects open source. 
  I'm currently working on a few projects of my own, and I'm always looking for new ideas to work on.`,
  `In my free time I love to play video games, watch anime, and play basketball (I promise you can't guard me).`,
];

type Experience = {
  name: string;
  title: string;
  timeline: string;
  image: string;
};

export const experiences: Experience[] = [
  {
    name: "Purdue University",
    title: "Computer Science Major",
    timeline: "August 2023 - Present",
    image: "purdue.jpeg",
  },
  {
    name: "Miracle Flights",
    title: "Software Engineering Intern",
    timeline: "June 2022 - Present",
    image: "miracleflights.png",
  },
];

export const resumeLink =
  "https://docs.google.com/document/d/1SnXzQu2UcEE_-OiwoRd64iDFE83RYsKsLhAbYKP93dc/edit?usp=sharing";
