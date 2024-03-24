// import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ProjectsNavbar from "@/components/ProjectsNavbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-end justify-center hide-scrollbar min-h-[40vh] bg-black/[0.96] antialiased dark:bg-dot-white/[0.2] bg-dot-black/[0.2] hide-scrollbar">
            <div>
            <Navbar />
            </div>
            <div className="w-full">
            <ProjectsNavbar />
            </div>
        </div>
        {children}
      </body>
    </html>
  );
}
