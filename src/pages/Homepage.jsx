import CollabCTA from "../components/Homepage/CollabCTA";
import Hero from "../components/Homepage/Hero";
import Projects from "../components/Homepage/Projects";
import React from "react";
import Recommendations from "../components/Homepage/Recommendations";
import Skills from "../components/Homepage/Skills";

export default function Homepage() {
  return (
    <div className="container">
      <Hero />
      <Skills />
      <Projects />
      <Recommendations />
      <CollabCTA />
    </div>
  );
}
