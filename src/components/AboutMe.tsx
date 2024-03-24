"use client";
import { MaskContainer } from "./ui/svg-mask-effect";

export default function AboutMe() {
  return (
    <div className="py-12 hide-scrollbar">
      <div className="text-center">
        {/* <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          ABOUT ME
        </h2> */}
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          About me
        </p>
      </div>

      <div className="mt-10 mx-8">
        <div className="flex flex-wrap gap-8 justify-center text-3xl text-center">
          <MaskContainer
            revealText={
              <p className="max-w-4xl mx-auto text-slate-800 text-center text-sm text-wrap sm:text-4xl font-bold">
                I am a Kanpur based Developer with about a year of experience in
                frontend technologies. I have worked as a freelancer and
                currently working as developer and designer in Codeaspire
                Consulting Services. With strong foundations in Javascript I
                have strong understanding of API integration and its Testing.
              </p>
            }
            className="h-[40rem] w-full dark:bg-transparent border rounded-md"
          >
            Look all I am saying is that I am good with <span className="text-red-500">Javascript</span> I know how to <span className="text-red-500">Integrate APIs</span> and I have a knack for crafting stunning <span className="text-red-500">UI designs</span>.
          </MaskContainer>
        </div>
      </div>
      <div className="mt-20 text-center"></div>
    </div>
  );
}
