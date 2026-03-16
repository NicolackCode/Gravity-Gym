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
            <p className="section-subtitle" style={{ marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
              Pour un club premium climatisé de 500 m² consommant en moyenne 120 MWh/an, l'effort continu d'un parc de 40 machines permet d'atteindre l'équation suivante :
            </p>
            
            <div className="stat-list">
              <div className="stat-row">
                <div className="stat-icon"><Leaf size={20} /></div>
                <div>
                  <span className="stat-value">~180 kWh</span>
                  <span className="stat-label">produits par jour</span>
                </div>
              </div>
              <div className="stat-row">
                <div className="stat-icon"><Wind size={20} /></div>
                <div>
                  <span className="stat-value">10,9 g</span>
                  <span className="stat-label">Intensité plancher du mix (gCO₂/kWh)</span>
                </div>
              </div>
              <div className="stat-row">
                <div className="stat-icon"><Sun size={20} /></div>
                <div>
                  <span className="stat-value">Jusqu'à 18%</span>
                  <span className="stat-label">de couverture énergétique autonome</span>
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
                  <span className="timeline-year">2026</span>
                  <h4>Pilote Paris</h4>
                  <p>Ouverture du 1er site (500m²).</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">2027</span>
                  <h4>Expansion</h4>
                  <p>3 salles premium en France.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">2028</span>
                  <h4>Licensing EU</h4>
                  <p>Déploiement franchise en Europe.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
