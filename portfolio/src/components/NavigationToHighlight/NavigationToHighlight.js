// CircleMotionPath.js

import React, { useRef, useEffect, useState } from "react";
import { gsap, Power1 } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import HalfCircleSvg from "../About/HalfCircleSvg";
import "./navigationHighlighter.css";
gsap.registerPlugin(MotionPathPlugin);

const CircleMotionPath = () => {
  const [positionY, setPositionY] = useState(0);
  const circleRef = useRef(null);
  const pathRef = useRef(null);

  const buttonPositions = [0,0.20, 0.40, 60, 80, 100];

  useEffect(() => {
    const circle = circleRef.current;

    // Create a timeline for the animation
    function handleMouseMove(e) {
      setPositionY(1 - e.y / window.innerHeight);
    }
    const ele = document.getElementById("#about")
    ele?.addEventListener("mousemove", handleMouseMove);

    // gsap.set(circle, { top: 0, right: 0, scale: 1.2 });
    gsap.from(circle, {
      motionPath: {
        path: "#halfCirclePath",
        autoRotate: true,
        align: "#halfCirclePath",
        alignOrigin: [0.5, 0.5],
        end: positionY,
        start: positionY,
      },

      ease: Power1.easeInOut,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [positionY]);

  const pointOnPath = (position, index) => {
    const path = pathRef.current?.querySelector("#halfCirclePath");
    // const pathLength = path.getTotalLength();
    const point = path?.getPointAtLength(position);
  

    if (point?.x) {
      return <span
      key={index}
      className="motionPathButton"
      style={{
        position: "absolute",
        color: "red",
        right: point.x,
        top: point.y,
        transform: "translate(-50%, 50%)"
      }}
      onClick={() => console.log(`Button ${index + 1} clicked`)}
    >
      {/* Button {index + 1} */}
      .
    </span>;
    }
    return null
  };

  return (
    <div className="pathContainer" ref={pathRef}>
      <div ref={circleRef} className="pathIcon" />

      <HalfCircleSvg />
      {buttonPositions.map((position, index) => (
        pointOnPath(position,index)
      ))}
    </div>
  );
};

export default CircleMotionPath;
