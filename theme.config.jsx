import React from "react";
import Head from "next/head";

const Layout = (props) => {
  const title = `${props.pageOpts.title} | Notes`;
  return (
    <div className="min-h-screen py-4 px-4 md:py-16 flex-col text-foreground gap-4 items-center justify-start flex bg-background">
      <Head>
        <title>{title}</title>
      </Head>
      <div className=" md:w-1/2 h-full pb-6 px-2 border-b-[1px] border-contrast w-full xl:w-2/5 flex justify-between items-center">
        <a href="/" className="md:text-2xl flex text-md items-center gap-4">
          <img
            src="https://avatars.githubusercontent.com/u/68964499?v=4"
            className="h-10 rounded-full"
          />
        </a>
        <div className="flex gap-6 items-center">
          <a
            href="/about"
            className="text-md text-muted hover:text-foreground transition"
          >
            about
          </a>
          <a
            href="https://github.com/namishh/notes"
            className="text-md bg-background-2 hover:bg-surface-2 transition  px-4 py-2 border-[1px] border-contrast rounded-md flex items-center gap-2"
          >
            <img
              src="/github.svg"
              className="h-6 p-[1px] bg-black rounded-full"
            />
            <p>source</p>
          </a>
        </div>
      </div>
      <div className="md:w-1/2 px-2 w-full grow markdown-content xl:w-2/5">
        {props.children}
      </div>
      <div className=" md:w-1/2 pt-4 px-2 border-t-[1px] border-contrast w-full xl:w-2/5 flex justify-between items-center">
        <a href="https://namishh.me" className="text-md md:text-xl">
          my web
        </a>
        <div className="flex gap-5">
          <a
            href="https://x.com/namishdev"
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
