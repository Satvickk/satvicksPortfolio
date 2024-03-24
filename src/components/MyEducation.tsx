"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
export default function MyEducation() {

  const content = [
    {
      title : "Bachelors of Science (Computer Application)",
      description : "Chhatrapati Shahu ji Maharaj University, Kanpur [CSJMU]",
      time : "2020 - 2023",
    },
    {
      title : "Class XII (Computer Science)",
      description : "Kendriya Vidyalaya No.2 AFS Chakeri, Kanpur",
      time : "2019 - 2020",
    },
    {
      title : "Class X",
      description : "Kendriya Vidyalaya No.2 AFS Chakeri, Kanpur",
      time : "2017 - 2018",
    },

  ]


  return (

<div className="py-12">
<div className="text-center">
  <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
    EDUCATION
  </h2>
  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
    Academic Education
  </p>
</div>

<div className="mt-10 mx-8">
  <div className=" gap-8 justify-center">
  <StickyScroll content={content} />
  </div>
</div>
<div className="mt-20 text-center"></div>
</div>
  )
}

