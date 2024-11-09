import React from "react";
import './education.css';

const Education = () => {
  return (
    <div>
      <section id="education" className="education-section">
        <div className="education-list">
          <h2 className="education-title">
            MY <span className="highlight">EDUCATION</span>
          </h2>
          <div className="education-item">
            <h3 className="education-item-title">Naz Primary and Secondary School</h3>
            <p className="education-item-details">Year: 2020-2021</p>
            <p className="education-item-details">Field: Science (Biology)</p>
          </div>
          <div className="education-item">
            <h3 className="education-item-title">City Government College</h3>
            <p className="education-item-details">Year: 2022-2023</p>
            <p className="education-item-details">Field: Commerce</p>
          </div>
          <div className="education-item">
            <h3 className="education-item-title">GIAIC</h3>
            <p className="education-item-details">Field: AI</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
