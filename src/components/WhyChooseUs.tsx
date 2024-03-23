"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import content from "@/data/content.json"
export default function WhyChooseUs() {
  return (
    <div className="p-10 hide-scrollbar">
    <StickyScroll content={content} />
  </div>
  )
}

