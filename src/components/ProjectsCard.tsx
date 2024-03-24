"use client"
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";
import Link from 'next/link';

interface propsData {
  id: number,
  title: string,
  body: string,
  category: string,
  link: string
}

export default function ProjectsCard(props : { projects: propsData[], heading : string }) {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED PROJECTS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">{props.heading} Projects</p>
        </div>
        <div className="mt-10">
          <HoverEffect items={props.projects.map(web => ({
            title : web.title,
            description : web.body,
            link : web.link
          }))}/>
        </div>
        {/* <div className="mt-10 text-center">
          <Link href={"/projects"}>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              View All Projects
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  )
}
