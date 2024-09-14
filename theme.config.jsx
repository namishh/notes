import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Sun, Moon, LucideGithub } from "lucide-react";

const Layout = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const getTheme = () => {
      if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
          return savedTheme === "dark";
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
      return false;
    };

    setIsDarkMode(getTheme());
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", isDarkMode);
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const title = `${props.pageOpts.title} | Notes`;
  return (
    <div className="min-h-screen py-4 px-4 md:py-16 flex-col text-neutral-900 dark:text-foreground gap-4 items-center justify-start transition flex bg-neutral-50 dark:bg-background">
      <Head>
        <title>{title}</title>
      </Head>
      <div className=" md:w-1/2 h-full pb-6 px-2 border-b-[1px] border-neutral-200 dark:border-contrast w-full xl:w-2/5 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <a href="/" className="md:text-2xl flex text-md items-center gap-4">
            <img
              src="https://avatars.githubusercontent.com/u/68964499?v=4"
              className="h-10 rounded-full"
            />
          </a>
          <button onClick={toggleTheme} className="" aria-label="Toggle theme">
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
        <div className="flex gap-6 items-center">
          <a
            href="/about"
            className="text-md text-gray-600 hover:text-neutral-900 dark:text-muted dark:hover:text-foreground transition"
          >
            about
          </a>
          <a
            href="https://github.com/namishh/notes"
            className="text-md border-neutral-300 bg-white hover:bg-neutral-50 dark:bg-background-2 dark:hover:bg-surface-2 transition  px-4 py-2 border-[1px] dark:border-contrast rounded-md flex items-center gap-2"
          >
            <LucideGithub size={20} />
            <p>source</p>
          </a>
        </div>
      </div>
      <div className="md:w-1/2 px-2 w-full grow markdown-content xl:w-2/5">
        {props.children}
      </div>
      <div className=" md:w-1/2 pt-4 px-2 border-t-[1px] border-neutral-200 dark:border-contrast w-full xl:w-2/5 flex justify-between items-center">
        <a href="https://namishh.me" className="text-md md:text-xl">
          my web
        </a>
        <div className="flex gap-5">
          <a
            href="https://x.com/namishh_"
            className="text-md md:text-lg text-white"
          >
            <span className="text-contrast hover:text-foreground transition ml-2">
              x dot com
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Layout;
