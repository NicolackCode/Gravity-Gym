import { Instagram, Linkedin, Mail, Download } from 'lucide-react';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <span className="footer-logo">⚡ GRAVITY GYM</span>
          <p className="footer-tagline">L'énergie de la ville. Créée par ses habitants.</p>
        </div>

        <div className="footer-links">
          <a href="mailto:invest@gravitygym.io" className="footer-link">
            <Mail size={18} />
            invest@gravitygym.io
          </a>
          <a href="#" className="footer-link">
            <Instagram size={18} />
            @gravitygym_io
          </a>
          <a href="#" className="footer-link">
            <Linkedin size={18} />
            Gravity Gym
          </a>
        </div>
        
        <div className="footer-cta">
          <button className="btn-primary footer-btn">
            <Download size={18} />
            Dossier investisseur PDF
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 Gravity Gym — Concept innovant. Tous droits réservés.</span>
        <span className="footer-disclaimer">Concept brevetable. Données financières estimatives non contractuelles.</span>
      </div>
    </footer>
  );
}
