"use client";
import Link from "next/link";
import { WavyBackground } from "./ui/wavy-background";
// import { AnimatedTooltip } from "./ui/animated-tooltip";
import Instructor from "@/data/instructors.json";

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Have an Idea ? Let's connect
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Learn the best ways possible to bring your idea to life
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <Link href={"/contact"}>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Connect with Me
              </span>
            </button>
          </Link>
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;
