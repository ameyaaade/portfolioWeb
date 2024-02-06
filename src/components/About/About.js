import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Profile from "../../images/profilePic.png";
import Developer from "../../images/developer.png";

import "./about.css";
import { useTypingEffect } from "../../hooks/typing-effect";

const About = ({ handleClick, aboutRef }) => {
  const animationRef = useRef(null);
  const navigationRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const mid = window.innerHeight / 2;
    setScrollPosition(
      Math.floor((Math.ceil((window.pageYOffset - mid) / mid) + 1) / 2)
    );
  };

  useEffect(() => {
    let gsapCtx = gsap.context(() => {
      const t2 = gsap.timeline();
      gsap.from(".about__short-description", { y: "200%", duration: 1 });
      t2.from(
        ".developerImg",
        { x: "200%", opacity: 0 }
      ).fromTo(
        ".socials_link",
        {
          y:20,
          duration: 0.5,
          opacity: 0,
        },
        {
          y:0,
          duration: 0.5,
          opacity: 1,
          ease: "expo.out",
          stagger: 1,
        }
      );
      
    }, animationRef);
    return () => gsapCtx.revert();
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTabClick = (index) => {
    handleClick(index);
    tabsCleanup();
  };

  const handleMouse = (e, index, type) => {
    tabsCleanup();
    if (type === "over") {
      e.target.previousElementSibling?.classList?.add("secondary");
    } else {
      e.target.previousElementSibling?.classList?.remove("secondary");
    }
  };

  const tabsCleanup = () => {
    navigationRef.current
      .querySelectorAll(".tab.secondary")
      .forEach((e) => e.classList.add("secondary"));
  };
  const text = useTypingEffect("Ameya Ade", 500);
  return (
    <section id="about" ref={aboutRef}>
      <div className="container about-content-wrapper" ref={animationRef}>
        <div className="about-content">
          <div className="about-image">
            <img className="about-image_tag" src={Profile} alt="Profile" />
          </div>
          <h2 className={`about__my-name ${text.length > 1 && "cursor"}`}>
            {" "}
            {text.length > 1 ? text : " "}
          </h2>
          <p className="about__short-description">Full-Stack Developer.</p>

          <div className="socials_container">
            <a className="socials_link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ameya-ade/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className="socials_link" target="_blank" rel="noreferrer" href="https://github.com/ameyaaade">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            {/* <a className="socials_link" href="#">
              <FontAwesomeIcon icon={faEnvelope} />
            </a> */}
          </div>
        </div>

        <div className="hero-image">
          <img className="developerImg" src={Developer} alt="bin" />
        </div>
      </div>

      <div
        className="bottom-navigation"
        ref={navigationRef}
        onMouseLeave={(e) => tabsCleanup()}
      >
        {["About", "Skills", "Experience", "Projects", "Contact"].map(
          (tab, index) => (
            <div
              key={index}
              onMouseOver={(e) => handleMouse(e, index, "over")}
              onMouseLeave={(e) => handleMouse(e, index, "leave")}
              className={`tab ${scrollPosition === index ? "active" : ""}`}
              onClick={(i) => handleTabClick(index)}
            >
              {tab}
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default About;
