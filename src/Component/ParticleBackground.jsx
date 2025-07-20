import React, { useEffect } from 'react';

const ParticleBackground = () => {
    useEffect(() => {
        const loadParticles = async () => {
          const particlesJS = await import('particles.js');
          particlesJS.default.load('particles-js', '/particles.json', () => {
            console.log('particles.js loaded');
          });
        };
    
        loadParticles();
      }, []);
    
      return (
        <div
          id="particles-js"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: -1,
            top: 0,
            left: 0,
          }}
        />
      );
};

export default ParticleBackground;
