import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main>
      <About />
      <Projects />
      <Skills />
      <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
