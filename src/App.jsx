import React, { lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
const Projects = lazy(() => import("./components/Projects/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));


export default function App() {
  return (
    <main className="main-container">
      <Navbar />
      <Home />
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
        <Experience />
        <Contact />
      </Suspense>
    </main>
  );
}
