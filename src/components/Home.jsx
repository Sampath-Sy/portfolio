import React from "react";
import avatar from "./../assets/avatar.png";
import css from "./../assets/css.png";
import html from "./../assets/html.png";
import javascript from "./../assets/javascript.png";
import nodejs from "./../assets/nodejs.png";
import react from "./../assets/reactjs.png";

export default function Home() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <img src={avatar} alt="logo" />
        <h1 className="title">
          Hi There, I am <span className="name">Sampathi</span>{" "}
        </h1>
        <p className="short-summary">
          I'm a Front-end Developer with 3 years of experience specializing in
          React.js and TypeScript. Proficient in building scalable,
          user-friendly web applications with a focus on responsive design,
          state management, and seamless API integrations. Skilled in developing
          dynamic, reusable components and implementing efficient validation in
          multi-step forms. Experienced in handling complex business logic and
          delivering high-quality solutions within tight deadlines.
        </p>
        <div className="quick-links">
          <a href="#contact">
            <button className="get-in-touch">Get In Touch</button>
          </a>
          <a href="/SampathiYedukondalu.pdf" download>
            <button className="download-cv">Download CV</button>
          </a>
        </div>
        <div className="experience-skills">
          <h2 className="experience-text">EXPERIENCE WITH</h2>
          <div className="skill-logos">
            <img src={javascript} alt="javascript logo" />
            <img src={nodejs} alt="nodejs logo" />
            <img src={html} alt="html logo" />
            <img src={css} alt="css logo" />
            <img src={react} alt="reacjs logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
