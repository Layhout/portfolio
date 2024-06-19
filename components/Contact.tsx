"use client";

import { MouseEvent, useCallback } from "react";

export default function Contact() {
  const copyToClipboard = useCallback((e: MouseEvent) => {
    const ele = e.target as HTMLElement;
    navigator.clipboard.writeText(ele.textContent!);

    const copyBtn = ele.nextElementSibling as HTMLButtonElement;
    copyBtn.innerHTML = "Copied!";

    setTimeout(() => {
      copyBtn.innerHTML = "Copy";
    }, 2000);
  }, []);

  return (
    <section className="h-[35vh] flex flex-col" id="contact_section">
      <h1 className="section-title">Contacts</h1>
      <div className="flex-1 flex pt-8 pb-20 xl:pt-0 xl:pb-0 lg:items-center">
        <div className="flex-1 flex flex-col gap-20 xl:flex-row xl:gap-0 justify-between">
          <ul className="flex flex-col justify-between gap-12 xl:gap-0 font-black">
            <li onClick={copyToClipboard} className="text-gray-400 cursor-pointer group flex justify-between items-center">
              <span className="text-xl sm:text-3xl">layhoutchea79@gmail.com</span>
              <button className="opacity-0 group-hover:opacity-100 font-normal" id="copy-btn">
                Copy
              </button>
            </li>
            <li onClick={copyToClipboard} className="text-gray-400 cursor-pointer group flex justify-between items-center">
              <span className="text-xl sm:text-3xl">+855 96 336 9000</span>
              <button className="opacity-0 group-hover:opacity-100 font-normal" id="copy-btn">
                Copy
              </button>
            </li>
            <li className="text-xl sm:text-3xl text-gray-400">Based in Phnom Penh, Cambodia.</li>
          </ul>
          <ul className="grid grid-cols-[repeat(2,auto)] justify-between text-3xl lg:grid-cols-[repeat(3,auto)] sm:text-5xl font-black gap-y-20 gap-x-0 lg:gap-8 xl:gap-12 2xl:gap-20">
            <li>
              <a href="https://t.me/layhout" className="hover:underline">
                Telegram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/layhout-chea/" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/Layhout" className="hover:underline">
                Github
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/chea.layhout.79" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/layhout_chea/" className="hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
