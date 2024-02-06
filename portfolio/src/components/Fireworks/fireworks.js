import React, { useEffect, useRef } from "react";

const Fireworks = () => {
  const canvasRef = useRef(null);
  const fireworksRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    function createFirework(x, y) {
      const particleCount = 100;
      const particles = [];

      for (let i = 0; i < particleCount; i++) {
        const angle = random(0, Math.PI * 2);
        const speed = random(1, 3);
        const radius = random(4, 8);
        const color = `hsl(${random(0, 360)}, 100%, 50%)`;

        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius,
          color,
        });
      }

      return particles;
    }

    function drawFirework(particles) {
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
    }

    let then = Date.now();
    let elapsed = 0;
    function animate() {
      const now = Date.now();
      elapsed = now - then;
      //   console.log('e',elapsed)
      // if enough time has elapsed, draw the next frame

      requestAnimationFrame(animate);
      if (elapsed > 30) {
        if (!canvas) return; // Check if canvas is defined

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fireworksRef.current.forEach((firework) => {
          firework.particles.forEach((particle) => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.radius *= 0.98;
          });

          drawFirework(firework.particles);
        });

        fireworksRef.current = fireworksRef.current.filter(
          (firework) => firework.particles[0].radius > 0
        );
        then = now;
      }
    }

    const handleCanvasClick = (event) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      if (fireworksRef.current.length > 10) {
        fireworksRef.current = [];
      }
      fireworksRef.current.push({
        particles: createFirework(mouseX, mouseY),
      });
    };

    canvas.addEventListener("click", handleCanvasClick);

    animate();

    const fireworksInterval = setInterval(() => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = Math.random() * rect.width - rect.left;
      const mouseY = Math.random() * rect.height - rect.top;

      if (fireworksRef.current.length > 10) {
        fireworksRef.current = [];
      }
      fireworksRef.current.push({
        particles: createFirework(mouseX, mouseY),
      });
    }, 1000);

    return () => {
      canvas.removeEventListener("click", handleCanvasClick);
      clearInterval(fireworksInterval);
    };
  }, []); // Only run this effect once, when the component mounts

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};

export default Fireworks;
