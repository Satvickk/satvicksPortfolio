"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "./ui/multi-step-loader";

export default function LoaderScreen() {
  const [loading, setLoading] = useState(false);
  const [height, setHeight] = useState("100vh");
  const [display, setDisplay] = useState("flex");

  const loadingStates = [
    { text: "CSS: Can't Style Swiftly" },
    { text: "JS: Just Stressing" },
    { text: "HTML: How To Meet Deadlines?" },
    { text: "React: Really Enjoying A Coffee Time" },
  ];
  

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setHeight("0vh");
      setLoading(false);
      setDisplay("hidden")
    }, 8000);
  };

  return (
    <div
      className={`w-full h-[${height}] relative top-0 left-0 flex items-center justify-center transition-all duration-900 ease-linear`}
    >
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} loop={false} />

      <button
        onClick={startLoading}
        className={`bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 ${display} items-center justify-center`}
        style={{
          boxShadow:
            "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        }}
      >
        Start
      </button>
    </div>
  );
}
