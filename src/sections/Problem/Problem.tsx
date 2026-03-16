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
          <h2 className="section-title">Une énergie humaine <span className="text-wood">gaspillée</span></h2>
          <p className="section-subtitle">
            Chaque jour, des millions de personnes s'entraînent. Aujourd'hui, cet effort colossal est perdu, 
            tandis que les salles de sport traditionnelles consomment des quantités astronomiques d'électricité.
          </p>
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
            <p>100% de l'énergie cinétique générée par les sportifs est dissipée sous forme de chaleur ou de friction.</p>
          </motion.div>

          <motion.div className="problem-card" variants={itemVariants}>
            <div className="problem-icon">
              <Factory size={32} />
            </div>
            <h3>Gourmand en Énergie</h3>
            <p>Une salle de sport classique consomme en moyenne 150 kWh par mètre carré par an.</p>
          </motion.div>

          <motion.div className="problem-card" variants={itemVariants}>
            <div className="problem-icon">
              <BatteryWarning size={32} />
            </div>
            <h3>Zéro Résilience</h3>
            <p>Les modèles actuels dépendent entièrement du réseau électrique traditionnel, sans autonomie.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
