import { cubicBezier, Variants } from "framer-motion";

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

export const easeOutQuart = cubicBezier(0.165, 0.84, 0.44, 1);

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

export interface MyData {
  aboutMe: string;
  myEdus: MyE[];
  myExps: MyE[];
  mySkills: MySkill[];
  myLibSkills: MySkill[];
  myProjects: MyProject[];
  socialLinks: SocialLink[];
}

export interface MyE {
  title: string;
  location: string;
  date: string;
}

export interface MySkill {
  name: string;
  capacity: string;
  bgColor: string;
  fgColor: string;
}

export interface MyProject {
  image: string;
  description: string;
  link: string;
}

export interface SocialLink {
  name: string;
  link: string;
}
