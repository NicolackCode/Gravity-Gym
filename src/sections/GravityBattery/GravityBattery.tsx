import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './GravityBattery.css';
import batteryMacro from '../../assets/media/battery-macro.png';

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

  // Map scroll progress to the Y position of the image (moves up as you scroll down)
  const massY = useTransform(scrollYProgress, [0, 1], [50, -50]);

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
              Un stockage gravitaire expérientiel. Notre monolithe cinétique transforme l'énergie potentielle (E=mgh) en un spectacle architectural permanent.
              <br/><br/>
              Il stocke le travail mécanique de l'effort collectif pour le libérer lors de la redescente.
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
              <li>Masse de 12.5 T en mouvement perpétuel</li>
              <li>Rendement de restitution réseau : ~74%</li>
              <li>{/* @MotionDesignTeam : Implémenter le Canvas WebGL interactif ici pour la masse dynamique */}</li>
            </ul>
          </motion.div>
        </div>

        {/* Right: Immersive 3D representation */}
        <div className="battery-visual">
          <div className="battery-macro-container">
            <motion.img 
              src={batteryMacro} 
              alt="Macro view of the gravity battery pulleys and cables" 
              className="battery-macro-image"
              style={{ y: massY }}
            />
            <div className="battery-macro-overlay"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
