import { motion } from 'framer-motion';
import { Settings, Zap, Cpu, Anchor, ArrowRight } from 'lucide-react';
import './MaterialArchitectureBOM.css';

export function MaterialArchitectureBOM() {
  return (
    <section id="bom" className="bom-section">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-badge wood-badge">Génie Mécanique</span>
          <h2 className="section-title">Ingénierie <span className="text-wood">Matérielle</span></h2>
          <p className="section-subtitle">
            Transparence totale sur notre chaîne d'approvisionnement (Bill of Materials). Nos postes de travail sont rétrofités avec des composants industriels ultra-matures, minimisant le risque R&D.
          </p>
        </motion.div>

        <div className="bom-grid">
          {/* Timeline / Chain */}
          <div className="bom-flow">
            <motion.div className="bom-node" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="node-icon"><Settings /></div>
              <div className="node-content">
                <h4>Vélo de Spinning</h4>
                <p>Châssis propriétaire Eco-Brutalist</p>
              </div>
            </motion.div>
            
            <ArrowRight className="flow-arrow text-wood" />
            
            <motion.div className="bom-node" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="node-icon"><Anchor /></div>
              <div className="node-content">
                <h4>Alternateur (200-800W)</h4>
                <p>Moteur à aimant permanent triphasé. Coût unitaire : 140€ - 200€</p>
              </div>
            </motion.div>

            <ArrowRight className="flow-arrow text-wood" />

            <motion.div className="bom-node" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="node-icon"><Cpu /></div>
              <div className="node-content">
                <h4>Pont Redresseur</h4>
                <p>Conversion AC/DC + Condensateur. Coût: 15€ - 25€</p>
              </div>
            </motion.div>

            <ArrowRight className="flow-arrow text-wood" />

            <motion.div className="bom-node highlight-node" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className="node-icon"><Zap /></div>
              <div className="node-content">
                <h4>Micro-Onduleur Enphase IQ8</h4>
                <p>Rendement &gt;97%. Synchronisation réseau certifiée. Coût: ~159€ - 215€</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="bom-summary-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="bom-total">
              <span className="label">Coût Global de Rétrofit Estimé</span>
              <span className="value text-wood">315€ — 440€</span>
              <span className="unit">/ poste (hors châssis)</span>
            </div>
            
            <div className="bom-alternative">
              <h5>Stratégie OEM (Achat sur étagère)</h5>
              <p>
                Pour le club pilote, nous prévoyons un partenariat constructeur exclusif basé sur 
                l'ingénierie interne de la gamme Eco-Powr (équipements générateurs certifiés), 
                tout en habillant la machine de notre interface haptique (Béton et Laiton).
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
