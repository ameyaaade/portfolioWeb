import React, { useEffect, useState, useRef, createRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

import "./index.css";
import GetInTouch from "./components/GetInTouch/GetInTouch";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const containerRef = useRef(null);
  const [sectionRef, setSectionRef] = useState([]);
  const [showSite, setShowSite] = useState(false);

  const doHandleClick = (i) => {
    sectionRef[i].current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setSectionRef((elRefs) =>
      Array(5)
        .fill()
        .map((_, i) => elRefs[i] || createRef())
    );

    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.fromTo(
        ".intro_container",
        { x: "-100%", duration: 1 },
        { x: 0, duration: 1 }
      )
        .fromTo(
          ".title-2",
          { opacity: 0, },
          { opacity: 1, delay: 0.5 }
        )
        .fromTo(
          ".title-3",
          { opacity: 0},
          { opacity: 1, delay: 0.5 }
        )
        .to(".intro_container", { x: 0 })
        .to(".intro_container", {
          x: "100%",
          display: "none",
          duration: 0.5,
          onStart: () => {
            setShowSite(true);
          },
        })
        .fromTo(
          ".site",
          { opacity: 0, scale: 0.2 },
          { opacity: 1, duration: 0.5, scale: 1 }
        );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="App" ref={containerRef}>
      <div className="intro_container">
        <h2 className="title-1"> Hi </h2>
        <h1 className="title-2">
          Myself <label className="my-name"> Ameya Ade</label>
        </h1>
        <h2 className="title-3"> A Fullstack Web Developer </h2>
      </div>

      {showSite && (
        <>
          {/* <Fireworks /> */}
          <About
            aboutRef={sectionRef[0]}
            handleClick={(e) => doHandleClick(e)}
          />
          <Skills skillRef={sectionRef[1]} />
          <Experience expRef={sectionRef[2]} />
          <Projects projectRef={sectionRef[3]} />
          {/* <Education eduRef={sectionRef[4]} /> */}
          <GetInTouch getInTouch={sectionRef[4]} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
