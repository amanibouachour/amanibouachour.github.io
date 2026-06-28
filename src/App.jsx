import { Routes, Route } from "react-router-dom";

import ScrollToTop from "@/utils/ScrollToTop";

import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";

import Dnext from "@/pages/experiences/Dnext";
import Brainstack from "@/pages/experiences/Brainstack";
import Nachd from "@/pages/experiences/Nachd";

// HOME PAGE
function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* EXPERIENCE PAGES */}
        <Route
          path="/experience/dnext"
          element={
            <>
              <Navbar />
              <Dnext />
              <Footer />
            </>
          }
        />

        <Route
          path="/experience/brainstack"
          element={
            <>
              <Navbar />
              <Brainstack />
              <Footer />
            </>
          }
        />

        <Route
          path="/experience/nachd"
          element={
            <>
              <Navbar />
              <Nachd />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}
