import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads a lightweight version of tsparticles

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // loads the necessary engine for particles
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true }, // Covers the full screen
        particles: {
          number: { value: 50 }, // Number of particles
          shape: { type: "circle" }, // Shape of particles
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 5 } }, // Particle size range
          move: {
            enable: true,
            speed: 2, // Movement speed
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
