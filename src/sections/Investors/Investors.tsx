import { motion } from 'framer-motion';
import { Globe, TrendingUp, ShieldCheck, Rocket, Download } from 'lucide-react';
import './Investors.css';

const reasons = [
  {
    icon: <Globe size={28} />,
    title: "Marché mondial du fitness",
    value: "96 Mds €",
    detail: "en croissance de 8,7%/an. Le segment éco-responsable progresse 3× plus vite que la moyenne.",
    color: "energy"
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Tendance écologique structurelle",
    value: "+220%",
    detail: "de demande pour des infrastructures sportives durables entre 2020 et 2024.",
    color: "green"
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Différenciation inattaquable",
    value: "IP Protégé",
    detail: "Concept brevetable. La pile à gravité centrale est un élément de différenciation physique impossible à copier rapidement.",
    color: "wood"
  },
  {
    icon: <Rocket size={28} />,
    title: "Scalabilité du modèle",
    value: "×10",
    detail: "En 5 ans avec un déploiement franchise. Le concept se licence sans investissement lourd par ouverture.",
    color: "concrete"
  },
];

export function Investors() {
  return (
    <section id="investors" className="investors-section">
      <div className="section-container">
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-badge wood-badge">Pour les Investisseurs</span>
          <h2 className="section-title">Pourquoi <span className="text-wood">investir maintenant</span> ?</h2>
        </motion.div>

        <div className="reasons-grid">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              className={`reason-card`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className={`reason-icon accent-icon-${r.color}`}>{r.icon}</div>
              <div className={`reason-value accent-text-${r.color}`}>{r.value}</div>
              <h3>{r.title}</h3>
              <p>{r.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Block */}
        <motion.div
          className="investor-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="cta-text">
            <h3>Vous souhaitez en savoir plus ?</h3>
            <p>Notre dossier investisseur complet (financier, technique, marché) est disponible sur demande.</p>
          </div>
          <div className="cta-actions">
            <button className="btn-primary cta-btn">
              <Download size={20} />
              Télécharger le dossier PDF
            </button>
            <a href="mailto:invest@gravitygym.io" className="btn-outline-mail">invest@gravitygym.io</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
