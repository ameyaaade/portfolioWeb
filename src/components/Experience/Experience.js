import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import DeloittePng from "../../images/deloitte.png";
import NineleapsPng from "../../images/nineleaps.png";
import "./experience.css";
gsap.registerPlugin(ScrollTrigger);
const Experience = ({ expRef }) => {
  useEffect(() => {
    gsap.utils.toArray(".experience-card").forEach((card) => {
      gsap.fromTo(
        card,
        { autoAlpha: 0, x: 100 },
        {
          duration: 1,
          autoAlpha: 1,
          x: 0,
          scrollTrigger: {
            trigger: card,
            start: "left 80%", // Start the animation when the top of the card enters the viewport at 80%
            end: "left 20%", // End the animation when the bottom of the card leaves the viewport at 20%
            toggleActions: "play none none reverse", // Actions taken when scrolling forward and backward
            scrub: true
          },
        }
      );
    });
  }, []);
  return (
    <section id="experience" ref={expRef}>
      <div className="container experience-wrapper">
        <h2 className="experience-title">Experience</h2>
        <div className="experience-timeline"></div>
        <div className="experience-items__container">
          <div className="experience-card">
            <img src={DeloittePng} alt="company logo" />
            <div className="experience-card_info-container">
              <h3>Full-Stack Developer (Consultant)</h3>
              <p>Deloitte, Pune, India (Jun 2022 - Dec 2022)</p>
              <ul>
                <li>
                  Facilitated collaboration between functional and development
                  teams.
                </li>
                <li>
                  Developed a specialized React.js components library for
                  clients’ projects.
                </li>
                <li>
                  Configured Webpack with SCSS preprocessing and dynamic
                  imports.
                </li>
                <li>
                  Set up client-side routing using Next.js for optimized
                  navigation.
                </li>
              </ul>
            </div>
          </div>

          <div className="experience-card">
            <img src={DeloittePng} alt="company logo" />

            <div className="experience-card_info-container">
              <h3>Full-Stack Developer (Analyst)</h3>
              <p>Deloitte, Bangalore, Karnataka (Jan 2021 - May 2022)</p>
              <ul>
                <li>
                  Implemented CI/CD setup using Kubernetes and Docker for
                  development and testing teams.
                </li>
                <li>
                  Led the front-end development team, ensuring code quality and
                  best practices.
                </li>
                <li>
                  Enhanced SEO optimization strategies for e-commerce websites.
                </li>
              </ul>
            </div>
          </div>

          <div className="experience-card">
            <img src={NineleapsPng} alt="company logo" />

            <div className="experience-card_info-container">
              <h3>Member of Technical Staff-2</h3>
              <p>Nineleaps, Bangalore, Karnataka (Jul 2019 - Feb 2020)</p>
              <ul>
                <li>
                  Pioneered the end-to-end development of a cross-platform
                  mobile application using React Native.
                </li>
                <li>
                  Designed and developed REST APIs using Node.js and MongoDB.
                </li>
                <li>
                  Styled web pages using CSS3, SCSS, Bootstrap, Tailwind, and
                  React-Bootstrap.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
