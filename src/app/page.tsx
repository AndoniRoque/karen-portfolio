// app/page.tsx
"use client";

import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}
