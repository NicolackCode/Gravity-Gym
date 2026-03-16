import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="hero-badge">Le futur de l'effort physique</span>
          <h1 className="hero-title">
            Et si votre entraînement <br />
            <span className="text-highlight">alimentait le bâtiment ?</span>
          </h1>
        </motion.div>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Gravity Gym est la première infrastructure sportive où chaque calorie brûlée crée de l'électricité tangible, stockée via une pile à gravité monumentale.
        </motion.p>

        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button className="btn-primary">Télécharger le dossier investisseur</button>
        </motion.div>
      </div>

      <motion.div 
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <span className="scroll-text">Découvrir le concept</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={24} className="scroll-icon" />
        </motion.div>
      </motion.div>

      <div className="hero-background">
        <div className="concrete-texture"></div>
        <div className="glow-effect"></div>
        
        {/* Placeholder for 3D Gravity Battery Silhouette */}
        <div className="gravity-column-placeholder">
          <motion.div 
            className="gravity-mass"
            animate={{ y: [100, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          ></motion.div>
          <div className="cables"></div>
          <div className="cables left"></div>
        </div>
      </div>
    </section>
  );
}
