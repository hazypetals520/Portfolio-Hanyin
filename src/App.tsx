import React from 'react';
import CustomCursor from './components/ui/CustomCursor';
import UtilityBar from './components/layout/UtilityBar';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import ScrollWordReveal from './components/ui/motion-scroll-word-reveal';
import AboutMe from './components/sections/AboutMe';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-ink selection:bg-sage selection:text-ink font-sans">
      {/* Custom Minimalist Swiss Dot Cursor */}
      <CustomCursor />

      {/* Top Black Utility Bar */}
      <UtilityBar />

      {/* Main Sticky Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main className="flex-1">
        <Hero />

        {/* Editorial Scroll-Driven Word Reveal Section */}
        <section className="w-full bg-canvas border-b border-borderLine py-16 sm:py-24 lg:py-32 px-8 sm:px-14 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <ScrollWordReveal
              kicker="PERSONAL MANIFESTO / PERSPECTIVE"
              text="No one bad is ever truly bad, And no one good is ever truly good."
            />
          </div>
        </section>

        <AboutMe />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Swiss Minimalist Footer */}
      <Footer />
    </div>
  );
}
