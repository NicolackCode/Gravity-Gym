import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './GravityBattery.css';

export function GravityBattery() {
  const [kwh, setKwh] = useState(12450.8);
  const containerRef = useRef<HTMLDivElement>(null);

  // Simulate real-time energy production
  useEffect(() => {
    const interval = setInterval(() => {
      // Add random amount between 0.01 and 0.05 every 2 seconds
      setKwh(prev => prev + (Math.random() * 0.04 + 0.01));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Parallax effect for the battery mass based on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to the Y position of the mass (moves up as you scroll down)
  const massY = useTransform(scrollYProgress, [0, 1], [300, -100]);
  const cableHeight = useTransform(scrollYProgress, [0, 1], ["80%", "20%"]);

  return (
    <section id="battery" className="battery-section" ref={containerRef}>
      <div className="battery-container">
        
        {/* Left: Interactive Counter & Info */}
        <div className="battery-info">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="section-badge concrete-badge">Le Cœur du Système</span>
            <h2 className="section-title">La Pile à <span className="text-wood">Gravité</span></h2>
            <p className="section-subtitle">
              Une tour centrale de 8 mètres de haut. L'énergie produite par les membres actionne des treuils silencieux qui soulèvent un bloc de béton de plusieurs tonnes. 
              <br/><br/>
              L'énergie électrique devient une force gravitationnelle, visible, compréhensible et tangible.
            </p>

            <div className="counter-box">
              <div className="counter-label">Énergie stockée aujourd'hui</div>
              <div className="counter-value">
                {kwh.toFixed(1)} <span className="counter-unit">kWh</span>
              </div>
              <div className="counter-status">
                <span className="status-dot animate-pulse"></span>
                Production en cours
              </div>
            </div>
            
            <ul className="battery-features">
              <li>Stockage cinétique à 95% d'efficacité</li>
              <li>Zéro dégradation chimique</li>
              <li>Durée de vie théorique de 50 ans</li>
            </ul>
          </motion.div>
        </div>

        {/* Right: Immersive 3D/CSS representation */}
        <div className="battery-visual">
          <div className="battery-shaft">
            
            {/* Ambient lighting inside the shaft */}
            <div className="shaft-glow"></div>
            
            {/* The Cables */}
            <motion.div className="shaft-cables" style={{ height: cableHeight }}>
              <div className="cable"></div>
              <div className="cable"></div>
              <div className="cable"></div>
              <div className="cable"></div>
            </motion.div>

            {/* The Concrete Mass */}
            <motion.div 
              className="mass-block"
              style={{ y: massY }}
            >
              <div className="mass-texture"></div>
              <div className="mass-details">
                <div className="mass-stripe"></div>
                <div className="mass-weight">12.5 T</div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
