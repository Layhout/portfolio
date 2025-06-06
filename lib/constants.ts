import { cubicBezier, Variants } from "framer-motion";

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

export const easeOutQuart = cubicBezier(0.165, 0.84, 0.44, 1);

export const ABOUT_ME = `A frontend developer with over ${
  new Date().getFullYear() - 2021
} years of experience, fueled by a relentless drive to learn and grow. I’m passionate about expanding my skills and aim to become a highly capable full-stack developer`;

export const MOVE_RANGE = 30;

export const LINEAR_EASE = "transition-transform duration-100 ease-linear";

export const LINKS = [
  {
    link: "about_section",
    name: "About",
  },
  {
    link: "ee_section",
    name: "Edu & Exp",
  },
  {
    link: "skill_section",
    name: "Skill",
  },
  {
    link: "work_section",
    name: "Work",
  },
  {
    link: "contact_section",
    name: "Contacts",
  },
];

export const wrapperVariant: Variants = {
  open: {
    width: "var(--nav-open-width, 0px)",
    maxHeight: "var(--nav-open-height, 0px)",
    transition: { duration: 0.7, delay: 0, ease: easeOutQuart },
  },
  close: {
    width: "var(--nav-close-width, 0px)",
    maxHeight: "var(--nav-close-height, 0px)",
    transition: { duration: 0.7, delay: 0.5, ease: easeOutQuart },
  },
};

export const navBtnDivVariant: Variants = {
  open: {
    rotate: -180,
    transition: { duration: 0.7, ease: easeOutQuart },
  },
  close: {
    rotate: 0,
    transition: { duration: 0.7, ease: easeOutQuart },
  },
};

export const navBtnSpan1Variant: Variants = {
  open: {
    y: 0,
    rotate: 45,
    transition: { duration: 0.7, ease: easeOutQuart },
  },
  close: {
    y: -4,
    rotate: 0,
    transition: { duration: 0.7, ease: easeOutQuart },
  },
};

export const navBtnSpan2Variant: Variants = {
  open: {
    y: 0,
    rotate: -45,
    width: "100%",
    transition: { duration: 0.7, ease: easeOutQuart },
  },
  close: {
    y: 4,
    rotate: 0,
    width: "50%",
    transition: { duration: 0.7, ease: easeOutQuart },
  },
};

export const logoImgVariant: Variants = {
  open: {
    y: "var(--logo-open-y, 0px)",
    transition: { duration: 0.7, delay: 0, ease: easeOutQuart },
  },
  close: {
    y: "var(--logo-close-y, 0px)",
    transition: { duration: 0.7, delay: 0.5, ease: easeOutQuart },
  },
};

export const linksWrapperVariant: Variants = {
  open: {
    zIndex: 1,
    transition: { duration: 0, staggerChildren: 0.1 },
  },
  close: {
    zIndex: -1,
    transition: { duration: 0, staggerChildren: 0.1 },
  },
};

export const linkVariant: Variants = {
  open: {
    y: "var(--link-open-y, 0px)",
    opacity: "var(--link-open-opacity, 1)",
    scale: "var(--link-open-scale, 1)",
    pointerEvents: "auto",
    transition: { duration: 0.7, ease: easeOutQuart },
  },
  close: {
    y: "var(--link-close-y, 0px)",
    opacity: "var(--link-close-opacity, 1)",
    scale: "var(--link-close-scale, 1)",
    pointerEvents: "none",
    transition: { duration: 0.7, ease: easeOutQuart },
  },
};

export const themeBtnDivVariant: Variants = {
  light: {
    rotate: 0,
    y: "-50%",
    x: "-50%",
    transition: { duration: 0.7, ease: easeOutQuart },
  },
  dark: {
    rotate: -180,
    y: "-50%",
    x: "-50%",
    transition: { duration: 0.7, ease: easeOutQuart },
  },
};

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
    image: "/assets/images/portfolio_1.png",
    description: "Balancify is a side project I developed to simplify group expense management with friends and family.",
    link: "https://balancify.vercel.app/",
  },
];
