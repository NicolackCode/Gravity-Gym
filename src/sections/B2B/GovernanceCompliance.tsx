import { motion } from 'framer-motion';
import { Building2, AlertTriangle, Scale } from 'lucide-react';
import './GovernanceCompliance.css';

export function GovernanceCompliance() {
  return (
    <section id="governance" className="gov-section">
      <div className="section-container">
        <div className="gov-grid">
          
          <motion.div 
            className="gov-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge concrete-badge">Real Estate & B2B</span>
            <h2 className="section-title">Le Locataire <span className="text-concrete-light">Idéal</span></h2>
            
            <p className="gov-lead text-green">
              Le Décret Éco Énergie Tertiaire impose -40% de consommation énergétique d'ici 2030. 
            </p>
            
            <p className="gov-body">
              L'obligation s'applique dès que la surface dédiée aux activités tertiaires est supérieure ou égale à 1 000 m², <strong>cumulable à l'échelle du bâtiment entier</strong>.
              <br/><br/>
              Les foncières immobilières sont sous pression pour éviter d'immenses CAPEX de rénovation thermique. En s'installant dans un local de 500m² ou plus, <strong>Gravity Gym génère sa propre électricité et allège le bilan énergétique total de l'immeuble.</strong> Nous sommes l'arme réglementaire ("Unfair Advantage") des grands propriétaires immobiliers.
            </p>
          </motion.div>

          <motion.div 
            className="gov-cards"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="gov-card">
              <Scale className="gov-icon text-concrete-light" size={32} />
              <h4>Conformité Légale</h4>
              <p>Bilan carbone (Scope 1, 2, 3) subventionné via le dispositif Diag Décarbon'Action (Bpifrance).</p>
            </div>
            
            <div className="gov-card highlight-card">
              <AlertTriangle className="gov-icon text-wood" size={32} />
              <h4>Leveur de Risque Tertiaire</h4>
              <p>Compensation autonome prédictible jusqu'à 18% des besoins du lot, abaissant les DPE des bâtiments vieillissants.</p>
            </div>

            <div className="gov-card">
              <Building2 className="gov-icon text-concrete-light" size={32} />
              <h4>Partenariats Syndics</h4>
              <p>Capacité à déployer le club en rez-de-chaussée commercial des immenses tours tertiaires ou campus universitaires.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
