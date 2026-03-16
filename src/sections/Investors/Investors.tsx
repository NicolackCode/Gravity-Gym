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

        {/* Lead Qualification Form */}
        <motion.div
          className="investor-form-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="form-header">
            <h3>Accéder au Pitch Deck (Série A)</h3>
            <p>Notre documentation financière, technique et les plans architecturaux sont réservés aux investisseurs qualifiés.</p>
          </div>
          <form className="investor-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Nom / Fonds d'investissement</label>
              <input type="text" id="name" placeholder="Ex: VC Partners..." required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email professionnel</label>
              <input type="email" id="email" placeholder="contact@fonds.vc" required />
            </div>
            <div className="form-group">
              <label htmlFor="ticket">Ticket d'investissement envisagé</label>
              <select id="ticket" required defaultValue="">
                <option value="" disabled>Sélectionnez une fourchette</option>
                <option value="seed">Seed (1M€ - 3M€)</option>
                <option value="seriea">Série A (3M€ - 10M€)</option>
                <option value="strategic">Partenaire Stratégique / Real Estate</option>
              </select>
            </div>
            <button className="btn-primary form-submit-btn">
              <Download size={20} />
              DÉBLOQUER LE PITCH DECK
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
