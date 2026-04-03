"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BigStatement from "@/components/BigStatement";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Languages from "@/components/Languages";
import ResumeCTA from "@/components/ResumeCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <BigStatement />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Skills />
        <Languages />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
