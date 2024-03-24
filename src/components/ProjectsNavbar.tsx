'use client'
import Link from "next/link";
import React, { useState } from "react";

interface ButtonItem {
  id: number;
  title: string;
  src: string;
}

const btnArray: ButtonItem[] = [
  {
    id: 1,
    title: "All",
    src: "/projects"
  },
  {
    id: 2,
    title: "Company",
    src: "/projects/company"
  },
  {
    id: 3,
    title: "Personal",
    src: "/projects/personal"
  },
  {
    id: 4,
    title: "UI/ Designs",
    src: "/projects/ui-designs"
  },
];

export default function ProjectsNavbar() {

  return (
    <div className="sm:h-auto h-[60vh] md:h-[20vh] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 hide-scrollbar">
      <div className="flex justify-center items-center flex-wrap">
        {btnArray.map((item) => (
          <Link href={item.src} key={item.id}>
          <button
            className="px-8 py-2 border border-black bg-transparent m-4 sm:m-0 text-black  dark:border-white relative group transition duration-200"
            >
            <div className="absolute -bottom-2 -right-2 bg-yellow-300 h-full w-full -z-9 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
            <span className="relative">{item.title}</span>
          </button>
            </Link>
        ))}
      </div>
    </div>
  );
}
