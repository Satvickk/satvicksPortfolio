"use client";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoRedux } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoFigma } from "react-icons/bi";

export default function TechStack() {
  return (
    <div className="py-12 hide-scrollbar">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          My Tech Stack
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Below are the libraries and tools with which I am proficient
        </p>
      </div>

      <div className="mt-10 mx-8">
        <div className="flex flex-wrap gap-8 justify-center text-5xl">
            <p><FaHtml5 /></p>
            <p><FaCss3Alt /></p>
            <p><FaJs /></p>
            <p><FaBootstrap /></p>
            <p><BiLogoTailwindCss /></p>
            <p><BiLogoRedux /></p>
            <p><BiLogoReact /></p>
            <p><BiLogoFigma /></p>
            
        </div>
      </div>
      <div className="mt-20 text-center">

      </div>
    </div>
  );
}
