import React from "react";
import "./education.css"

const Education = ({eduRef}) => {


  return (
    <section id="education" ref={eduRef}>
      <h2>Education</h2>
      <div className="container education-content">
        
        <div className="education-item">
          <h3>Master of Applied Computing</h3>
          <p>University of Windsor, Windsor, ON (Jan 2023 - Present)</p>
        </div>

        <div className="education-item">
          <h3>Bachelor of Engineering in Computer Science</h3>
          <p>PES Modern College of Engineering, Pune, India (Jun 2015 - Feb 2019)</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
