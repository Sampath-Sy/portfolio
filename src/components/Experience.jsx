import React from "react";
import deloitte from "./../assets/deloitte.png";

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-headline">Experience</h2>
      <div className="job-list">
        <div className="job-item">
          <img src={deloitte} alt="Deloitte" className="company-logo" />
          <div className="job-details">
            <div className="details-section">
              <h2>Analyst at Deloitte</h2>
              <span className="job-dates">Aug 2022– Present</span>
            </div>

            <p>
              As a Front-End Developer at Deloitte, I played a key role in
              designing and implementing modern web applications for diverse
              clients. Leveraging my expertise in React, TypeScript, HTML, CSS,
              and JavaScript, I collaborated with multidisciplinary teams to
              deliver intuitive and responsive user interfaces. My contributions
              focused on optimizing performance, ensuring accessibility, and
              enhancing user experience, supporting Deloitte’s commitment to
              delivering high-quality digital solutions across industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
