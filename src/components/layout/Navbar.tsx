import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import './Navbar.css';

export function Navbar() {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="brand-icon">⚡</span>
          <span className="brand-text">GRAVITY GYM</span>
        </div>
        
        <div className="navbar-links">
          <a href="#concept">Le Concept</a>
          <a href="#experience">Expérience</a>
          <a href="#impact">Impact</a>
        </div>

        <button className="btn-investor-nav">
          <Download size={18} />
          <span>Dossier Investisseur</span>
        </button>
      </div>
    </motion.nav>
  );
}
