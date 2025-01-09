import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Mitch Fade</h1>
        <p>
          85 Warm Springs, Cascade Locks, OR | (541)-561-9827 | fademitch@cityuniversity.edu
        </p>
      </header>

      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>B.A Biology</h3>
          <p>Whitman College, Walla Walla, WA USA | May 2019</p>

        </div>

        <h2>Work Experience</h2>
        <div className="work_history">
          <h3>Software Developer</h3>
          <p>RBC Signals</p>
          <p>Responsibilities include developing software for a global network of satellite ground stations</p>

          <h3>Quality Lead</h3>
          <p>Oregon Potato Company</p>
          <p>Helped ensure quality and regulatory requirements of food products</p>

        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="projects">
          <h3>Personal Website</h3>
          <p>Built a personal website using React and deployed it on GitHub Pages</p>
          <p>
            Source code:{" "}
            <a
              href="https://symmetrical-tribble-97q764qwxqvphxrx5-3000.app.github.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://symmetrical-tribble-97q764qwxqvphxrx5-3000.app.github.dev/
            </a>
          </p>

          <h3>Hobby Ground Station</h3>
          <p>Built a recieve ground station</p>
          <p>
            Source code:{" "}
            <a
              href="https://github.com/mfish122/hobby-satellite-tracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/studentname/online-bookstore
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;