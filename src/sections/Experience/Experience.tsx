import { motion } from 'framer-motion';
import { Trophy, Smartphone, Users, Zap } from 'lucide-react';
import './Experience.css';

export function Experience() {
  const features = [
    {
      icon: <Trophy size={32} />,
      title: "Classements",
      description: "Propulsez-vous dans le Top 10 des producteurs de watts.",
      color: "wood"
    },
    {
      icon: <Users size={32} />,
      title: "Défis Collectifs",
      description: "Atteignez l'autonomie globale via l'écran central.",
      color: "green"
    },
    {
      icon: <Smartphone size={32} />,
      title: "App Mobile",
      description: "Suivez vos watts et vos kg de CO₂ évités.",
      color: "energy"
    },
    {
      icon: <Zap size={32} />,
      title: "Recharge USB",
      description: "Rechargez vos appareils à la force de vos bras.",
      color: "concrete"
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-badge">Expérience Membre</span>
          <h2 className="section-title">S'entraîner est<br /><span className="text-energy">plus qu'un effort physique</span></h2>
        </motion.div>

        <div className="experience-grid">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className={`experience-card accent-${feature.color}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              <div className={`exp-icon accent-icon-${feature.color}`}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
