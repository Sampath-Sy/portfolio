import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="main-container">
      <Navbar />
      <Home/>
      <Projects/>
      <Experience/>
      <Contact/>
    </main>
  );
}
