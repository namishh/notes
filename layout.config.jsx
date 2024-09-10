import React from "react";
import Head from "next/head";

const Layout = (props) => {
  // console.log(props)
  return (
    <div className="text-white min-h-screen py-8 px-8 md:py-16 flex-col gap-4 items-center justify-start flex p-4 bg-gray-950">
      <Head>
        <title>{props.pageOpts.title}</title>
      </Head>
      <div className=" md:w-1/2 pb-4 border-b-[1px] border-gray-700 w-full xl:w-2/5 flex justify-between items-end">
        <a href="/" className="text-2xl flex items-end gap-4">
          <img src="/favicon.jpg" class="h-12 rounded-full" />
          <div>
            algo<span className="text-blue-400 font-bold">chan.</span>
          </div>
        </a>
        <div className="flex gap-5">
          <a href="/about" className="text-xl text-white">
            about
          </a>
          <a
            href="https://github.com/namishh/algochan"
            className="text-xl text-blue-400"
          >
            github
          </a>
        </div>
      </div>
      <div className="md:w-1/2 w-full markdown-content xl:w-2/5">
        {props.children}
      </div>
      <div className=" md:w-1/2 pt-4 border-t-[1px] border-gray-700 w-full xl:w-2/5 flex justify-between items-center">
        <a href="https://namishh.me" className="text-xl">
          namishh.
        </a>
        <div className="flex gap-5">
          <a href="https://x.com/namishdev" className="text-lg text-white">
            x <span class="text-blue-400 ml-2"> (formerly twitter)</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Layout;
