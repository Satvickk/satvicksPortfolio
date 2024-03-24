"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import Link from "next/link";

export default function contact() {
  return (
    <footer className="bg-black text-gray-400 py-12 h-screen w-full flex flex-center z-50">
      <div className="max-w-6xl mx-auto mt-32 sm:mt-0 my-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About me</h2>
          <p className="mb-4">
            I am a Frontend Developer skilled in crafting captivating digital
            experiences. With expertise in Javascript and React technologies, I
            specialize in creating responsive and intuitive user interfaces.
            Lets build something extraordinary together.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href={"/"}>
                <span className="hover:text-white transition-colors duration-300">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href={"/projects"}>
                <span className="hover:text-white transition-colors duration-300">
                  Projects
                </span>
              </Link>
            </li>
            <li>
              <Link href={"/contact"}>
                <span className="hover:text-white transition-colors duration-300">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow me</h2>
          <div className="flex flex-col space-y-4">
            <a
              href="https://www.linkedin.com/in/satvick-pathak-384956204"
              className="hover:text-white transition-colors duration-300 flex gap-3"
            >
              <FaLinkedin />LinkedIn
            </a>
            <a
              href="https://www.instagram.com/ig_satvick"
              className="hover:text-white transition-colors duration-300 flex gap-3"
            >
              <FaInstagram />Instagram
            </a>
            <a
              href="https://github.com/Satvickk"
              className="hover:text-white transition-colors duration-300 flex gap-3"
            >
              <FaGithub />Github
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact me</h2>
          <div className="flex flex-col space-y-4">
            <p>Kanpur, Uttar Pradesh</p>
            <p>India - 208008</p>
            <p><FaMailBulk /> satvickpathak@gmail.com</p>
          </div>
        </div>
      </div>
      {/* <BackgroundBeams /> */}
    </footer>
  );
}
