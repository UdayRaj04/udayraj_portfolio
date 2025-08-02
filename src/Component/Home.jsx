import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; // or loadSlim, loadBasic, etc.
import Navbar from "./Navbar";
import '../CSS/home.css';
import About from "./About";
import Education from "./Education";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import TypedEffect from "./TypedEffect";
import { Canvas } from "@react-three/fiber";
import ScreenSkill from "./ScreenSkill";
import '../CSS/screen.css'
import CoderProfile from "./CoderProfile";
import Footer from "./Footer";
import Certificates from "./Certificates";


const Home = () => {
    const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particleOptions = useMemo(
    () => ({
        // Your particle configuration goes here
        // You can often adapt JSON configs from particles.js demos/generators
        background: {
          color: {
            value: "#0a192f", // Example background color
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }),
    [],
  );

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}> {/* Outer relative container */}
      {init && (
        <div className="particles-container"> {/* Positioned container */}
          <Particles
            id="tsparticles"
            options={particleOptions}
            // You might need width/height props here if not using built-in fullscreen
            // width="100%"
            // height="100%"
          />
        </div>
      )}
      <div className="main-content"> {/* Content wrapper */}
      {/* <Navbar/> */}
      <div className="aa">
      <TypedEffect/>
      <About/>
      {/* <div className="screen-skill-wrapper"><Canvas camera={{fov: 35, near: 0.1, far: 2000, position: [-3, 1.5, 4],}}>
        <ScreenSkill/> </Canvas></div> */}
      <Education/>
      <Skill/>
      <Project/>
      {/* <Certificates/> */}
      <Contact/>
      </div>
      </div>
      <Footer/>
    </div>
  );
}


export default Home