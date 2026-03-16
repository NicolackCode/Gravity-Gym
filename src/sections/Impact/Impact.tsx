import { motion } from 'framer-motion';
import { Leaf, Wind, Sun } from 'lucide-react';
import './Impact.css';
import bgVideo from '../../assets/media/impact-bg.mp4';

export function Impact() {
  return (
    <section id="impact" className="impact-section">
      {/* Video Background */}
      <div className="impact-background">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="impact-video-bg"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="impact-overlay"></div>
      </div>

      <div className="section-container impact-content-wrapper">
        <div className="impact-grid">
          {/* Left: Data Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge green-badge">Impact Environnemental</span>
            <h2 className="section-title">Des chiffres <span className="text-green">concrets</span></h2>
            <p className="section-subtitle" style={{ marginBottom: '3rem' }}>
              Pour un établissement de 400 membres actifs, voici les estimations basées sur une moyenne de 150W produits par heure d'entraînement.
            </p>
            
            <div className="stat-list">
              <div className="stat-row">
                <div className="stat-icon"><Leaf size={20} /></div>
                <div>
                  <span className="stat-value">~180 kWh</span>
                  <span className="stat-label">produits par jour en pic d'affluence</span>
                </div>
              </div>
              <div className="stat-row">
                <div className="stat-icon"><Wind size={20} /></div>
                <div>
                  <span className="stat-value">~42 T CO₂</span>
                  <span className="stat-label">évités par an (vs réseau standard)</span>
                </div>
              </div>
              <div className="stat-row">
                <div className="stat-icon"><Sun size={20} /></div>
                <div>
                  <span className="stat-value">30 à 40%</span>
                  <span className="stat-label">de la consommation partiellement compensée</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Roadmap */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">Roadmap</span>
            <h2 className="section-title">Vision <span className="text-energy">3 ans</span></h2>
            <div className="roadmap-timeline">
              
              <div className="timeline-item">
                <div className="timeline-dot active"></div>
                <div className="timeline-content">
                  <span className="timeline-year">2025 → 2026</span>
                  <h4>Pilote Paris</h4>
                  <p>Ouverture du premier établissement (500 m²). Validation du concept, retour d'expérience membres, calibrage technique.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">2026 → 2027</span>
                  <h4>Expansion régionale</h4>
                  <p>3 salles premium dans des métropoles françaises. Lancement de l'app mobile V2 avec leaderboard national.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">2027 → 2028</span>
                  <h4>Licensing international</h4>
                  <p>Déploiement du modèle franchise en Europe. Licensing technologie aux opérateurs fitness. Série B envisagée.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
