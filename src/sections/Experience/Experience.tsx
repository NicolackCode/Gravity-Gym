import { motion } from 'framer-motion';
import { Trophy, Smartphone, Users, Zap } from 'lucide-react';
import './Experience.css';

export function Experience() {
  const features = [
    {
      icon: <Trophy size={32} />,
      title: "Classements",
      description: "Chaque kWh produit vous propulse dans le Top 10. Des défis hebdomadaires pour repousser vos limites et ceux de votre équipe.",
      color: "wood"
    },
    {
      icon: <Users size={32} />,
      title: "Défis collectifs",
      description: "Cette semaine : produire assez pour alimenter le bâtiment pendant 1 heure. L'écran central affiche la progression en direct.",
      color: "green"
    },
    {
      icon: <Smartphone size={32} />,
      title: "Application mobile",
      description: "Suivez vos watts produits, vos kWh cumulés et votre impact CO₂ évité. Partagez vos perfs sur vos réseaux.",
      color: "energy"
    },
    {
      icon: <Zap size={32} />,
      title: "Recharge USB",
      description: "Branchez votre téléphone directement sur la machine d'entraînement. Sortez avec 30% de batterie gagnée.",
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
