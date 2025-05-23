import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({
  image,
  description,
  githublink,
  demolink,
  title
}) {
  return (
    <div className="card-container">
      <img src='/imdb.png' alt="project image" className="project-image" />
      <h2 className="project-title">{title}</h2>
      <p className="description">{description}</p>
      <div className="btns-container">
        <a href={githublink} target="_blank">
          <button className="btn">Github</button>
        </a>
        <a href={demolink} target="_blank">
          <button className="btn">Demo</button>
        </a>
      </div>
    </div>
  );
}
