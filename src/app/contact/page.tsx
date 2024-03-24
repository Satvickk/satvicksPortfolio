"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function contact() {
  return (
    <footer className="bg-black text-gray-400 py-12 h-screen w-full flex flex-center">
      <div className="max-w-6xl mx-auto my-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About me</h2>
          <p className="mb-4">
            I am a Frontend Developer skilled in crafting captivating digital
            experiences. With expertise in Javascript and React technologies, I
            specialize in creating responsive and intuitive user interfaces.
            Let's build something extraordinary together.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="hover:text-white transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
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
            <p>India 208010</p>
            <p><FaMailBulk /> satvickpathak@gmail.com</p>
            <p><FaWhatsapp /> +91 8318505071</p>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </footer>
  );
}
