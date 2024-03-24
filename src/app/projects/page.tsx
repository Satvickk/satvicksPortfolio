'use client'
import React from "react";
import ProjectsCard from "@/components/ProjectsCard";
import project from "@/data/projects.json";

export default function Projects() {

  return (
    <main className="bg-black/[0.96] antialiased dark:bg-dot-white/[0.2] flex justify-center mb-8 bg-dot-black/[0.2] hide-scrollbar">
      <ProjectsCard projects={project} heading={'All'}/>
    </main>
  );
}


