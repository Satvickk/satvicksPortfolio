import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/ConnectWithMe";
import TestimonialCards from "@/components/TestimonialCards";
import MyEducation from "@/components/MyEducation";
import TechStack from "@/components/TechStack";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased dark:bg-dot-white/[0.2] bg-dot-black/[0.2] hide-scrollbar">
      <HeroSection />
      <TechStack />
      <AboutMe />
      <MyEducation />
      {/* <FeaturedCourses /> */}
      <TestimonialCards />
      <Instructors />
      <Footer />
    </main>
  );
}
