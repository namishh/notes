import React from 'react'
import Head from 'next/head'

const Layout = (props) => {
  // console.log(props)
  return (
    <div className="text-white min-h-screen py-8 px-8 md:py-16 flex-col gap-4 items-center justify-start flex p-4 bg-gray-950">
      <Head>
        <title>{props.pageOpts.title}</title>
      </Head>
      <div className=" md:w-1/2 pb-4 border-b-[1px] border-gray-700 w-full markdown-content xl:w-2/5 flex justify-between items-center">
        <a href="/" className="text-2xl">algo<span className="text-blue-400 font-bold">chan.</span></a>
        <div class="flex gap-5">
          <a href="/about" className="text-xl text-white">why</a>
          <a href="https://github.com/namishh/algochan" className="text-xl text-blue-400">github</a>

        </div>
      </div>
      <div className="md:w-1/2 w-full markdown-content xl:w-2/5">
        {props.children}
      </div>
    </div>
  )
}

export default Layout
