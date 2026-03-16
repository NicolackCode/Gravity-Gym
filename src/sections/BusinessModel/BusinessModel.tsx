import { motion } from 'framer-motion';
import { TrendingUp, Building2, Leaf, Globe, Award } from 'lucide-react';
import './BusinessModel.css';

const streams = [
  {
    icon: <TrendingUp size={28} />,
    title: "Abonnements",
    details: ["Mensuel : 79 €/mois", "Annuel : 69 €/mois", "Famille : 120 €/mois"],
    color: "wood"
  },
  {
    icon: <Building2 size={28} />,
    title: "Entreprises (RSE)",
    details: ["Packs salariés", "Reporting CO₂ certifié", "Branding sur la pile"],
    color: "energy"
  },
  {
    icon: <Leaf size={28} />,
    title: "Subventions",
    details: ["Crédit Impôt Innovation", "ADEME / Régions", "Fonds européens Horizon"],
    color: "green"
  },
  {
    icon: <Globe size={28} />,
    title: "Licensing",
    details: ["Franchise du concept", "Royalties machines", "Formation opérateurs"],
    color: "concrete"
  },
  {
    icon: <Award size={28} />,
    title: "Image Premium",
    details: ["Partenariats marques éco", "Événements & presse", "Contenu documentaire"],
    color: "wood"
  },
];

export function BusinessModel() {
  return (
    <section className="business-section">
      <div className="section-container">
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-badge">Modèle Économique</span>
          <h2 className="section-title">Un modèle <span className="text-wood">multi-revenus</span> robuste</h2>
          <p className="section-subtitle">Gravity Gym ne se finance pas uniquement sur les abonnements. Chaque pilier génère une ligne de revenus indépendante, limitant l'exposition aux risques.</p>
        </motion.div>

        <div className="biz-streams">
          {streams.map((s, i) => (
            <motion.div
              key={i}
              className={`biz-card accent-${s.color}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={`biz-icon accent-icon-${s.color}`}>{s.icon}</div>
              <div className="biz-content">
                <h3>{s.title}</h3>
                <ul className="biz-details">
                  {s.details.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Financial box */}
        <motion.div
          className="financial-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h3>Estimatif établissement pilote (500 m²)</h3>
          <div className="fin-grid">
            <div className="fin-item">
              <span className="fin-label">Investissement initial</span>
              <span className="fin-value">650 000 €</span>
            </div>
            <div className="fin-item">
              <span className="fin-label">Capacité membres</span>
              <span className="fin-value">400 abonnés</span>
            </div>
            <div className="fin-item">
              <span className="fin-label">CA prévisionnel (An 1)</span>
              <span className="fin-value">380 000 €</span>
            </div>
            <div className="fin-item">
              <span className="fin-label">Seuil de rentabilité</span>
              <span className="fin-value">18 à 24 mois</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
