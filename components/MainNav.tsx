"use client";

import {
  easeOutQuart,
  LINKS,
  linksWrapperVariant,
  linkVariant,
  logoImgVariant,
  navBtnDivVariant,
  navBtnSpan1Variant,
  navBtnSpan2Variant,
  themeBtnDivVariant,
  THEMES,
  wrapperVariant,
} from "@/lib/constants";
import { useLenis } from "@studio-freight/react-lenis";
import { motion, useAnimate, Variants } from "framer-motion";
import { LuMoon, LuSun } from "react-icons/lu";
import { useCallback, useEffect, useRef, useState } from "react";
import useTheme from "@/hooks/useTheme";

export default function MainNav() {
  const lenis = useLenis();
  const linksWrapper = useRef<HTMLUListElement>(null);

  const [openNav, setOpenNav] = useState(false);

  const { themesToggle, themeBtnRef, handleChangeTheme } = useTheme();

  const [bgHoverFX, animate] = useAnimate();

  const setBgHoverFX = useCallback(
    (ele: HTMLElement) => {
      animate(
        bgHoverFX.current,
        {
          x: ele.offsetLeft,
          y: ele.offsetTop,
          width: ele.scrollWidth,
          height: ele.scrollHeight,
        },
        { duration: 0.5, ease: easeOutQuart }
      );
    },
    [animate, bgHoverFX]
  );

  const toggleNav = useCallback(() => {
    setOpenNav(p => {
      if (p) animate(bgHoverFX.current, { opacity: 0 });
      return !p;
    });
  }, [animate, bgHoverFX]);

  const handleClickLink = useCallback(
    (link: string) => {
      if (lenis) {
        lenis.scrollTo(`#${link}`);
      } else {
        document.documentElement.style.scrollBehavior = "smooth";
        const a = document.createElement("a");
        a.href = `#${link}`;
        a.click();
      }
      toggleNav();
    },
    [lenis, toggleNav]
  );

  useEffect(() => {
    if (linksWrapper.current) {
      const firstLink = linksWrapper.current.children[0] as HTMLElement;
      setBgHoverFX(firstLink);
    }
  }, [animate, bgHoverFX, setBgHoverFX]);

  return (
    <motion.nav
      layout
      initial="close"
      animate={openNav ? "open" : "close"}
      variants={wrapperVariant}
      className="p-2 rounded-xl backdrop-blur-sm bg-white/60 dark:bg-black/40 fixed top-4 left-1/2 -translate-x-1/2 z-[9999] overflow-hidden md:[--nav-open-width:700px] md:[--nav-close-width:300px] [--nav-open-width:90%] [--nav-close-width:90%] [--nav-open-height:381px] [--nav-close-height:64px] md:[--nav-open-height:64px] md[--nav-close-height:64px]"
      id="main_nav"
    >
      <div className="flex justify-between items-center">
        <button className="bg-yellow-400 w-12 h-12 flex justify-center items-center rounded-lg" id="nav_btn" type="button" onClick={toggleNav}>
          <motion.div variants={navBtnDivVariant} className="relative w-2/5">
            <motion.span variants={navBtnSpan1Variant} className="absolute w-full h-0.5 bg-black left-0 top-0"></motion.span>
            <motion.span layout variants={navBtnSpan2Variant} className="absolute h-0.5 bg-black left-0 top-0"></motion.span>
          </motion.div>
        </button>
        <div className="overflow-hidden" id="logo_wrapper">
          <motion.img
            variants={logoImgVariant}
            src="/assets/images/CLH.png"
            alt="my logo"
            id="my_logo"
            className="w-[50px] object-contain md:[--logo-open-y:-110%] md:[--logo-close-y:0] [--logo-open-y:0] [--logo-close-y:0] dark:invert-[90%]"
          />
        </div>
        <motion.button
          initial={THEMES.LIGHT}
          animate={themesToggle}
          className="bg-zinc-200 w-12 h-12 rounded-lg relative overflow-hidden"
          id="theme_btn"
          type="button"
          ref={themeBtnRef}
          onClick={handleChangeTheme}
        >
          <motion.div variants={themeBtnDivVariant} className="absolute top-full left-1/2 flex flex-col justify-between items-center h-full dark:text-black">
            <LuMoon className="w-4 h-4 -translate-y-1/2" />
            <LuSun className="w-4 h-4 rotate-180 translate-y-1/2" />
          </motion.div>
        </motion.button>
      </div>
      <motion.ul
        variants={linksWrapperVariant}
        className="flex pt-2 flex-col static md:pt-0 md:flex-row md:items-center md:absolute top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 overflow-hidden before:absolute before:top-0 before:left-0 before:rounded-lg before:bg-zinc-300"
        id="nav_links"
        ref={linksWrapper}
      >
        {LINKS.map(({ link, name }, i) => (
          <motion.li
            variants={linkVariant}
            onHoverStart={e => {
              setBgHoverFX(e.target as HTMLElement);
              animate(bgHoverFX.current, { opacity: 1 });
            }}
            onHoverEnd={() => {
              animate(bgHoverFX.current, { opacity: 0 });
            }}
            onClick={() => handleClickLink(link)}
            data-section={link}
            key={i}
            className="cursor-pointer px-[18px] py-2 whitespace-nowrap text-center md:[--link-open-y:0] md:[--link-close-y:100%] [--link-open-y:0] [--link-close-y:0] md:[--link-open-opacity:1] md:[--link-close-opacity:1] [--link-open-opacity:1] [--link-close-opacity:0] md:[--link-open-scale:1] md:[--link-close-scale:1] [--link-open-scale:1] [--link-close-scale:0.9]"
          >
            {name}
          </motion.li>
        ))}
        <motion.li initial={{ opacity: 0 }} layout ref={bgHoverFX} className="absolute top-0 left-0 rounded-lg bg-zinc-200 dark:bg-zinc-500 -z-[1]" />
      </motion.ul>
    </motion.nav>
  );
}
