import { motion } from 'framer-motion';
import { BatteryWarning, ZapOff, Factory } from 'lucide-react';
import './Problem.css';

export function Problem() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="concept" className="problem-section">
      <div className="section-container">
        <motion.div 
          className="section-header center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge">Le Constat</span>
          <h2 className="section-title">L'énergie humaine est <span className="text-wood">gaspillée</span></h2>
        </motion.div>

        <motion.div 
          className="problem-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="problem-card" variants={itemVariants}>
            <div className="problem-icon">
              <ZapOff size={32} />
            </div>
            <h3>Effort Perdu</h3>
            <p>100% de l'énergie de l'entraînement est aujourd'hui dissipée.</p>
          </motion.div>

          <motion.div className="problem-card" variants={itemVariants}>
            <div className="problem-icon">
              <Factory size={32} />
            </div>
            <h3>Coût CO₂</h3>
            <p>Une salle classique consomme 150 kWh / m² / an.</p>
          </motion.div>

          <motion.div className="problem-card" variants={itemVariants}>
            <div className="problem-icon">
              <BatteryWarning size={32} />
            </div>
            <h3>Zéro Résilience</h3>
            <p>Dépendance totale au réseau électrique centralisé.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
