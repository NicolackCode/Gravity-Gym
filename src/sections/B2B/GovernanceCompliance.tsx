import { motion } from 'framer-motion';
import { Building2, AlertTriangle, Scale } from 'lucide-react';

export function GovernanceCompliance() {
  return (
    <section id="governance" className="bg-carbon-dark text-concrete py-24 md:py-32 px-4 relative z-10 overflow-hidden border-b border-black">
      {/* Background ambient light */}
      <div className="absolute left-0 bottom-0 w-[800px] h-[800px] bg-nature/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 bg-white/5 text-concrete-light font-bold tracking-widest uppercase text-xs mb-6 rounded-full border border-white/10 shadow-sm">
              Real Estate & B2B
            </span>
            <h2 className="font-heading font-black text-4xl md:text-6xl uppercase tracking-tighter mb-8 text-white">
              Le Locataire <span className="text-nature drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">Idéal</span>
            </h2>
            
            <p className="font-heading font-bold text-xl md:text-2xl text-nature mb-6 leading-tight">
              Le Décret Éco Énergie Tertiaire impose -40% de consommation énergétique d'ici 2030. 
            </p>
            
            <p className="font-sans text-lg font-light text-concrete-light leading-relaxed opacity-90">
              L'obligation s'applique dès que la surface dédiée aux activités tertiaires est supérieure ou égale à 1 000 m², <strong className="text-white font-medium">cumulable à l'échelle du bâtiment entier</strong>.
              <br/><br/>
              Les foncières immobilières sont sous pression pour éviter d'immenses CAPEX de rénovation thermique. En s'installant dans un local de 500m² ou plus, <strong className="text-white font-medium">Gravity Gym génère sa propre électricité et allège le bilan énergétique total de l'immeuble.</strong> Nous sommes l'arme réglementaire ("Unfair Advantage") des grands propriétaires immobiliers.
            </p>
          </motion.div>

          <motion.div 
            className="flex-1 w-full grid gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-panel p-6 md:p-8 rounded-2xl flex gap-6 items-start border border-white/5 hover:bg-white/5 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:border-concrete-light/30 transition-colors">
                <Scale className="text-concrete-light" size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xl text-white tracking-widest uppercase mb-2">Conformité Légale</h4>
                <p className="font-sans text-sm text-concrete-light/80 font-light leading-relaxed">Bilan carbone (Scope 1, 2, 3) subventionné via le dispositif Diag Décarbon'Action (Bpifrance).</p>
              </div>
            </div>
            
            <div className="glass-panel p-6 md:p-8 rounded-2xl flex gap-6 items-start border border-nature/30 bg-nature/5 shadow-[0_0_30px_rgba(16,185,129,0.05)] hover:bg-nature/10 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-nature/10 border border-nature/30 flex items-center justify-center shrink-0 shadow-glow-nature">
                <AlertTriangle className="text-nature" size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xl text-white tracking-widest uppercase mb-2 group-hover:text-nature transition-colors">Leveur de Risque Tertiaire</h4>
                <p className="font-sans text-sm text-concrete-light/90 font-light leading-relaxed">Compensation autonome prédictible jusqu'à 18% des besoins du lot, abaissant structurellement les DPE des bâtiments vieillissants.</p>
              </div>
            </div>

            <div className="glass-panel p-6 md:p-8 rounded-2xl flex gap-6 items-start border border-white/5 hover:bg-white/5 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:border-concrete-light/30 transition-colors">
                <Building2 className="text-concrete-light" size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xl text-white tracking-widest uppercase mb-2">Partenariats Syndics</h4>
                <p className="font-sans text-sm text-concrete-light/80 font-light leading-relaxed">Capacité à déployer le club en rez-de-chaussée commercial des immenses tours tertiaires ou campus universitaires.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
