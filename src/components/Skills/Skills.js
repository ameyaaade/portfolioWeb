// src/components/Skills.js

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ReactImg from "../../images/react.png";
import ReactNativeImg from "../../images/react-native.png";
import VueJs from "../../images/vue.png";
import NextJs from "../../images/next-js.svg";
import Node from "../../images/nodejs.png";
import ExpressJs from "../../images/express-js.png";
import MongoDB from "../../images/mongo-db.png";
import SocketIo from "../../images/Socket-io.png";
import JavaScriptImg from "../../images/javascript--v1.png";
import JavaImg from "../../images/java.png";
import PythonImg from "../../images/python.png";
import CCPlusPlusImg from "../../images/c-cplusplus.png";
import DockerImg from "../../images/docker.png";
import KubernetesImg from "../../images/Kubernetes.png";
import GitImg from "../../images/git.png";
import SalesforceLWCImg from "../../images/salesforce.png";

import "./skills.css";
gsap.registerPlugin(ScrollTrigger);
const Skills = ({ skillRef }) => {
  const skillsCardRef = useRef(null);
  useEffect(() => {

      // Animate each .skill-card on scroll
      gsap.utils.toArray("div.skill-card").forEach((card) => {
        if (window.innerWidth > 780) {
        gsap.fromTo(
          card,
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            duration: 0.5,
            autoAlpha: 1,
            y: 10,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
        }
      });
      
      // Hover animation for each card and its text
      gsap.utils.toArray(".skill-card").forEach((card) => {
        if (window.innerWidth > 780) {
        let tl = gsap.timeline({
          paused: true,
          reversed: true,
          defaults: { duration: 0.3, ease: "power1.out" },
        });

        tl.to(card, {
          scale: 1.05,
        }).to(
          card.querySelectorAll("img, span"),
          {
            color: "#f00",
            duration: 0.2,
          },
          0
        );
        
        card.addEventListener("mouseenter", () => tl.play());
        card.addEventListener("mouseleave", () => tl.reverse());
        }
      })
  
  }, []);
  return (
    <section className="scroll-section" ref={skillRef}>
      <div className="scroll-section-container" ref={skillsCardRef}>
        <h2 className="section-label">Skills</h2>
        <div className="skill-card">
          <img alt="react_logo" src={ReactImg} /> <span> React JS</span>
        </div>
        <div className="skill-card">
          <img alt="react-native_logo" src={ReactNativeImg} />{" "}
          <span> React Native</span>
        </div>
        <div className="skill-card">
          <img alt="vue-js_logo" src={VueJs} /> <span> Vue JS</span>
        </div>
        <div className="skill-card">
          <img alt="next-js_logo" src={NextJs} /> <span> Next JS</span>
        </div>

        <div className="skill-card">
          <img alt="node_logo" src={Node} /> <span> Node JS</span>
        </div>
        <div className="skill-card">
          <img alt="express_logo" src={ExpressJs} /> <span> Express JS</span>
        </div>
        <div className="skill-card">
          <img alt="mongo-logo" src={MongoDB} /> <span> MongoDB</span>
        </div>
        <div className="skill-card">
          <img alt="socket_logo" src={SocketIo} /> <span> Socket IO</span>
        </div>

        <div className="skill-card">
          <img src={JavaScriptImg} alt="JavaScript" />
          <span>JavaScript</span>
        </div>
        <div className="skill-card">
          <img src={JavaImg} alt="Java" />
          <span>Java</span>
        </div>
        <div className="skill-card">
          <img src={PythonImg} alt="Python" />
          <span>Python</span>
        </div>
        <div className="skill-card">
          <img src={CCPlusPlusImg} alt="C/C++" />
          <span>C/C++</span>
        </div>
        <div className="skill-card">
          <img src={DockerImg} alt="Docker" />
          <span>Docker</span>
        </div>
        <div className="skill-card">
          <img src={KubernetesImg} alt="Kubernetes" />
          <span>Kubernetes</span>
        </div>
        <div className="skill-card">
          <img src={GitImg} alt="Git" />
          <span>Git</span>
        </div>
        <div className="skill-card">
          <img src={SalesforceLWCImg} alt="Salesforce LWC" />
          <span>Salesforce LWC</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
