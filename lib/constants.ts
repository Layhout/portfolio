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
    bgColor: "#fce0d4", // tints 80%
    fgColor: "#f06529",
  },
  {
    name: "CSS",
    capacity: "90%",
    bgColor: "#d4e0fc",
    fgColor: "#2965f1",
  },
  {
    name: "Javascript",
    capacity: "90%",
    bgColor: "#fdf9d2",
    fgColor: "#f7df1f",
  },
  {
    name: "Typescript",
    capacity: "80%",
    bgColor: "#d6e3f2",
    fgColor: "#3075c0",
  },
  {
    name: "PHP",
    capacity: "50%",
    bgColor: "#e3e4ef",
    fgColor: "#7478af",
  },
  {
    name: "Java",
    capacity: "50%",
    bgColor: "#fad2d3",
    fgColor: "#e61f23",
  },
  {
    name: "Python",
    capacity: "50%",
    bgColor: "#fff6d8",
    fgColor: "#FFD43B",
  },
  {
    name: "Golang",
    capacity: "50%",
    bgColor: "#cceff7",
    fgColor: "#00add8",
  },
  {
    name: "SQL",
    capacity: "60%",
    bgColor: "#dee6eb",
    fgColor: "#5a839d",
  },
  {
    name: "Dart",
    capacity: "80%",
    bgColor: "#cceff7",
    fgColor: "#00add8",
  },
  {
    name: "Kotlin",
    capacity: "50%",
    bgColor: "#e5dcff",
    fgColor: "#7f52ff",
  },
  {
    name: "Swift",
    capacity: "50%",
    bgColor: "#fcdcd7",
    fgColor: "#F05138",
  },
];

export const MY_LIBS_SKILLS = [
  {
    name: "React js",
    capacity: "90%",
    bgColor: "#dff8fe",
    fgColor: "#61DBFB",
  },
  {
    name: "Next js",
    capacity: "90%",
    bgColor: "#cdcdcd",
    fgColor: "#030303",
  },
  {
    name: "Vue js",
    capacity: "50%",
    bgColor: "#d9f1e6",
    fgColor: "#41B883",
  },
  {
    name: "Tailwind CSS",
    capacity: "90%",
    bgColor: "#d7f1fc",
    fgColor: "#36b7f1",
  },
  {
    name: "Material UI",
    capacity: "50%",
    bgColor: "#d0e5ff",
    fgColor: "#157fff",
  },
  {
    name: "Vuetify",
    capacity: "50%",
    bgColor: "#d0e0f1",
    fgColor: "#1664ba",
  },
  {
    name: "Framer Motion",
    capacity: "80%",
    bgColor: "#fffdd5",
    fgColor: "#fff42b",
  },
  {
    name: "shadcn/ui",
    capacity: "80%",
    bgColor: "#d1d1d1",
    fgColor: "#171717",
  },
  {
    name: "Ant Design",
    capacity: "60%",
    bgColor: "#d0e1f8",
    fgColor: "#1668dc",
  },
  {
    name: "React Native",
    capacity: "90%",
    bgColor: "#dff8fe",
    fgColor: "#61DBFB",
  },
  {
    name: "Flutter",
    capacity: "80%",
    bgColor: "#cce5ff",
    fgColor: "#027DFD",
  },
  {
    name: "Node js",
    capacity: "60%",
    bgColor: "#e1ece0",
    fgColor: "#68a063",
  },
  {
    name: "Firebase",
    capacity: "50%",
    bgColor: "#fde6cf",
    fgColor: "#f5820d",
  },
  {
    name: "Mongodb",
    capacity: "50%",
    bgColor: "#d5fbe0",
    fgColor: "#2ced64",
  },
];

export const MY_PROJECTS = [
  {
    image: "/assets/images/portfolio_1.png",
    description: "Balancify is a side project I developed to simplify group expense management with friends and family.",
    link: "https://balancify.vercel.app/",
  },
];
