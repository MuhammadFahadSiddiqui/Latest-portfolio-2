import React from "react";
import './skills.css';

const Skills = () => {
  return (
    <div id="skills">
      <section className="skills-section">
        <h2 className="skills-title">
          MY <span className="highlight">SKILLS</span>
        </h2>
        <p className="skills-description">
          I have expertise in the following technologies:
        </p>
        <div className="flex justify-center flex-wrap">
          <div className="skill-card">
            <h3 className="skill-title">HTML</h3>
          </div>
          <div className="skill-card">
            <h3 className="skill-title">CSS</h3>
          </div>
          <div className="skill-card">
            <h3 className="skill-title">JavaScript</h3>
          </div>
          <div className="skill-card">
            <h3 className="skill-title">TypeScript</h3>
          </div>
          <div className="skill-card">
            <h3 className="skill-title">Tailwind CSS</h3>
          </div>
          <div className="skill-card">
            <h3 className="skill-title">Next.js</h3>
          </div>
        </div>
        <div className="link-section">
          <h2 className="find-me-title">
            FIND <span className="highlight">ME</span>
          </h2>
          <div className="link-container">
            <div className="link-card">
              <a
                href="https://github.com/MuhammadFahadSiddiqui"
                className="link-title"
              >
                GitHub
              </a>
            </div>
            <div className="link-card">
              <a
                href="https://vercel.com/muhammadfahadsiddiquis-projects"
                className="link-title"
              >
                Vercel
              </a>
            </div>
            <div className="link-card">
              <a
                href="https://www.npmjs.com/MuhammadFahadSiddiqui"
                className="link-title"
              >
                npm
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
