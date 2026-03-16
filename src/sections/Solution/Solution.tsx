import { motion } from 'framer-motion';
import { Activity, ArrowRight, Zap, Database, Recycle } from 'lucide-react';
import './Solution.css';

export function Solution() {
  const flowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  const arrowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="solution-section">
      <div className="section-container">
        <motion.div 
          className="section-header center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-badge energy-badge">La Solution</span>
          <h2 className="section-title">Devenez la <span className="text-energy">centrale électrique</span></h2>
          <p className="section-subtitle">
            Un écosystème low-tech révolutionnaire où chaque machine est connectée à un micro-alternateur. 
            L'énergie humaine est convertie, lissée et stockée de manière visible.
          </p>
        </motion.div>

        <motion.div 
          className="solution-flow"
          variants={flowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Step 1 */}
          <motion.div className="flow-step" variants={stepVariants}>
            <div className="step-icon-wrapper">
              <Activity className="step-icon text-main" size={40} />
            </div>
            <h4>Effort</h4>
            <p className="step-desc">Pédalage, course, traction</p>
          </motion.div>

          {/* Arrow */}
          <motion.div className="flow-arrow-container" variants={arrowVariants}>
            <ArrowRight className="flow-arrow text-muted" size={24} />
          </motion.div>

          {/* Step 2 */}
          <motion.div className="flow-step" variants={stepVariants}>
            <div className="step-icon-wrapper pulse-energy">
              <Zap className="step-icon text-energy" size={40} />
            </div>
            <h4>Alternateur</h4>
            <p className="step-desc">Conversion cinétique → électrique</p>
          </motion.div>

          {/* Arrow */}
          <motion.div className="flow-arrow-container" variants={arrowVariants}>
            <ArrowRight className="flow-arrow text-muted" size={24} />
          </motion.div>

          {/* Step 3 */}
          <motion.div className="flow-step" variants={stepVariants}>
            <div className="step-icon-wrapper pulse-gravity">
              <Database className="step-icon text-concrete" size={40} />
            </div>
            <h4>Pile à Gravité</h4>
            <p className="step-desc">Stockage physique de l'énergie (levage de masse)</p>
          </motion.div>

          {/* Arrow */}
          <motion.div className="flow-arrow-container" variants={arrowVariants}>
            <ArrowRight className="flow-arrow text-muted" size={24} />
          </motion.div>

          {/* Step 4 */}
          <motion.div className="flow-step" variants={stepVariants}>
            <div className="step-icon-wrapper pulse-green">
              <Recycle className="step-icon text-green" size={40} />
            </div>
            <h4>Réutilisation</h4>
            <p className="step-desc">Alimentation du bâtiment (lumière, climatisation)</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
