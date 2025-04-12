import { cubicBezier } from "framer-motion";

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

export const easeOutQuart = cubicBezier(0.165, 0.84, 0.44, 1);

export const ABOUT_ME = `A frontend developer with ${
  new Date().getFullYear() - 2021
}+ years experience who's driven by an insatiable hunger for experience and knowledge. My ultimate ambition is to evolve into a proficient full-stack developer.`;

export const MOVE_RANGE = 30;

export const LINEAR_EASE = "transition-transform duration-100 ease-linear";

export const MY_EDU = [
  {
    title: "Master of IT Engineering",
    location: "Royal University of Phnom penh",
    date: "2023 - Present",
  },
  {
    title: "Web Development",
    location: "ETEC Center",
    date: "2021 - 2022",
  },
  {
    title: "Java Development",
    location: "ETEC Center",
    date: "2019 - 2020",
  },
  {
    title: "Computer Science",
    location: "Royal University of Phnom penh",
    date: "2018 - 2022",
  },
  {
    title: "High School",
    location: "Hun sen borey 100 knong",
    date: "2018",
  },
];

export const MY_EXP = [
  {
    title: "Frontend Developer",
    location: "Wing Bank",
    date: "2023 - Present",
  },
  {
    title: "Software Developer",
    location: "Zando Cambodia",
    date: "2021 - 2023",
  },
  {
    title: "Software Developer",
    location: "A9 Online",
    date: "Jun 2021 - Sep 2021",
  },
];

export const MY_SKILLS = [
  {
    name: "HTML",
    capacity: "90%",
    bgColor: "#ffdbcc",
    fgColor: "#f06529",
  },
  {
    name: "CSS",
    capacity: "90%",
    bgColor: "#ccdbff",
    fgColor: "#2965f1",
  },
  {
    name: "Javascript",
    capacity: "90%",
    bgColor: "#fff9cc",
    fgColor: "#f7df1f",
  },
  {
    name: "Typescript",
    capacity: "80%",
    bgColor: "#cce5ff",
    fgColor: "#3075c0",
  },
  {
    name: "PHP",
    capacity: "50%",
    bgColor: "#cccfff",
    fgColor: "#7478af",
  },
  {
    name: "Java",
    capacity: "50%",
    bgColor: "#ffcccd",
    fgColor: "#e61f23",
  },
  {
    name: "C",
    capacity: "40%",
    bgColor: "#cce6ff",
    fgColor: "#6196cc",
  },
  {
    name: "C++",
    capacity: "50%",
    bgColor: "#cce6ff",
    fgColor: "#6196cc",
  },
  {
    name: "Python",
    capacity: "50%",
    bgColor: "#fff4cc",
    fgColor: "#FFD43B",
  },
  {
    name: "Golang",
    capacity: "50%",
    bgColor: "#ccf5ff",
    fgColor: "#00add8",
  },
  {
    name: "SQL",
    capacity: "60%",
    bgColor: "#ccebff",
    fgColor: "#5a839d",
  },
  {
    name: "Dart",
    capacity: "60%",
    bgColor: "#ccf5ff",
    fgColor: "#00add8",
  },
];

export const MY_LIBS_SKILLS = [
  {
    name: "React js",
    capacity: "90%",
    bgColor: "#ccf5ff",
    fgColor: "#61DBFB",
  },
  {
    name: "Next js",
    capacity: "90%",
    bgColor: "#d6d6d6",
    fgColor: "#030303",
  },
  {
    name: "Vue js",
    capacity: "50%",
    bgColor: "#ccffe8",
    fgColor: "#41B883",
  },
  {
    name: "React Native",
    capacity: "90%",
    bgColor: "#ccf5ff",
    fgColor: "#61DBFB",
  },
  {
    name: "Node js",
    capacity: "60%",
    bgColor: "#d0ffcc",
    fgColor: "#68a063",
  },
  {
    name: "Tailwind CSS",
    capacity: "90%",
    bgColor: "#ccefff",
    fgColor: "#36b7f1",
  },
  {
    name: "SASS",
    capacity: "60%",
    bgColor: "#ffcce6",
    fgColor: "#cc6699",
  },
  {
    name: "Firebase",
    capacity: "50%",
    bgColor: "#ffe6cc",
    fgColor: "#f5820d",
  },
  {
    name: "Bootstrap",
    capacity: "50%",
    bgColor: "#e4ccff",
    fgColor: "#7c12f9",
  },
  {
    name: "Material UI",
    capacity: "40%",
    bgColor: "#cce3ff",
    fgColor: "#157fff",
  },
  {
    name: "Vuetify",
    capacity: "40%",
    bgColor: "#cce5ff",
    fgColor: "#1664ba",
  },
  {
    name: "Mongodb",
    capacity: "40%",
    bgColor: "#ccffda",
    fgColor: "#2ced64",
  },
  {
    name: "Framer Motion",
    capacity: "60%",
    bgColor: "#d6d6d6",
    fgColor: "#030303",
  },
  {
    name: "shadcn/ui",
    capacity: "80%",
    bgColor: "#d6d6d6",
    fgColor: "#030303",
  },
  {
    name: "Ant Design",
    capacity: "60%",
    bgColor: "#cce0ff",
    fgColor: "#0c69ff",
  },
  {
    name: "Flutter",
    capacity: "50%",
    bgColor: "#ccf5ff",
    fgColor: "#00add8",
  },
];

export const MY_PROJECTS = [
  {
    image: "/assets/images/portfolio_1.jpg",
    description:
      "This is a group school project I completed with two other classmates. I took on the role of Developer, handling all the coding aspects. My teammates served as Director and Advisor, providing leadership and guidance throughout the process. The system we built is designed for restaurants situated near tourist destinations like waterfalls or beaches. Java served as the primary programming language for this project.",
    link: "https://drive.google.com/drive/folders/1R_nQDtgyQGGx6SQ5mo7k1eA0ySyUs6zG?usp=sharing",
  },
  {
    image: "/assets/images/portfolio_2.jpg",
    description:
      "After diving into HTML, CSS, and JavaScript, I discovered a particular fascination with CSS animation. To explore this interest further, I embarked on a personal project where I could apply everything I'd learned. The process was not only enjoyable, but it also led to a wealth of new discoveries.",
    link: "https://layhout.github.io/music_visualizer",
  },
  {
    image: "/assets/images/portfolio_3.jpg",
    description:
      "In this project, I brought together all the components I'd studied to create a system entirely from scratch.  I deliberately avoided using any third-party libraries, pushing myself to build everything myself.",
    link: "https://layhout.github.io/what-i-learned",
  },
];
