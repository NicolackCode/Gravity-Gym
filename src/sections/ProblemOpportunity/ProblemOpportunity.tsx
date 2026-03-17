import { motion } from 'framer-motion';
import { Flame, Activity } from 'lucide-react';
import { useAudience } from '../../context/AudienceContext';

export function ProblemOpportunity() {
  const { audience } = useAudience();

  return (
    <section id="problemopportunity" className="bg-carbon-dark text-concrete py-24 md:py-32 px-4 relative z-10">
      <div className="absolute inset-0 bg-radial-gradient from-carbon-light/20 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <motion.h2 
            className="font-heading font-black text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {audience === 'B2B' ? (
              <>
                L'IMMOBILIER <span className="text-red-500">CONSOMME.</span>
                <br />
                NOUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-nature to-emerald-300">FOURNISSONS.</span>
              </>
            ) : (
              <>
                LE FITNESS <span className="text-red-500">CONSOMME.</span>
                <br />
                VOTRE EFFORT <span className="text-transparent bg-clip-text bg-gradient-to-r from-nature to-emerald-300">PRODUIT.</span>
              </>
            )}
          </motion.h2>
          <motion.div 
            className="w-full h-[1px] bg-gradient-to-r from-nature/50 to-transparent mt-8"
            initial={{ scaleX: 0, transformOrigin: 'left' }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* L'Inefficacité (Gauche) */}
          <motion.div 
            className="glass-panel p-8 md:p-12 rounded-2xl border-t border-t-red-500/30 relative overflow-hidden group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[50px] rounded-full group-hover:bg-red-500/20 transition-all"></div>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="p-3 bg-red-500/10 rounded-lg text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                <Flame size={28} />
              </div>
              <h3 className="font-heading font-bold text-2xl uppercase tracking-tight text-white mb-0">Le Gouffre (Statut Quo)</h3>
            </div>
            
            <p className="font-sans text-lg mb-8 text-concrete-light/80 leading-relaxed font-light relative z-10">
              {audience === 'B2B' 
                ? <span dangerouslySetInnerHTML={{ __html: 'Un club premium standard de 500 m² engloutit en moyenne <strong class="text-red-400 font-semibold">120 MWh/an</strong>. Climatisation intensive, écrans allumés en permanence : un fardeau opérationnel et climatique insoutenable.' }} />
                : <span dangerouslySetInnerHTML={{ __html: 'Les salles de sport traditionnelles brûlent votre calories pour rien, tout en pompant de l\'électricité pour faire tourner des machines vides de sens.' }} />
              }
            </p>

            {audience === 'B2B' ? (
              <ul className="space-y-5 font-sans text-base text-concrete-light/90 relative z-10">
                <li className="flex items-center gap-4 border-b border-white/5 pb-4">
                  <span className="text-red-500 font-bold">✕</span>
                  Explosion incontrôlée des OPEX (Coûts Opérationnels)
                </li>
                <li className="flex items-center gap-4 border-b border-white/5 pb-4">
                  <span className="text-red-500 font-bold">✕</span>
                  Vulnérabilité critique aux fluctuations des prix de l'énergie
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-red-500 font-bold">✕</span>
                  Pénalités climatiques imminentes
                </li>
              </ul>
            ) : (
              <ul className="space-y-5 font-sans text-base text-concrete-light/90 relative z-10">
                <li className="flex items-center gap-4 border-b border-white/5 pb-4">
                  <span className="text-red-500 font-bold">✕</span>
                  Votre énergie est gâchée
                </li>
                <li className="flex items-center gap-4 border-b border-white/5 pb-4">
                  <span className="text-red-500 font-bold">✕</span>
                  Climatisation excessive
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-red-500 font-bold">✕</span>
                  Aucune utilité sociale
                </li>
              </ul>
            )}
          </motion.div>

          {/* L'Opportunité (Droite) */}
          <motion.div 
            className="glass-panel bg-nature/5 p-8 md:p-12 rounded-2xl border-t border-t-nature/50 relative overflow-hidden group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-nature/10 blur-[60px] rounded-full group-hover:bg-nature/20 transition-all"></div>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="p-3 bg-nature/20 rounded-lg text-nature shadow-glow-nature">
                <Activity size={28} />
              </div>
              <h3 className="font-heading font-bold text-2xl uppercase tracking-tight text-white mb-0">L'Arbitrage (La Solution)</h3>
            </div>
            
            <p className="font-sans text-lg mb-8 text-concrete-light/90 leading-relaxed font-light relative z-10">
              {audience === 'B2B'
                ? <span dangerouslySetInnerHTML={{ __html: 'Transformer la dépense métabolique humaine en <strong class="text-nature font-semibold">actif financier tangible</strong>. Un parc rétro-fitté compense structurellement et de manière autonome les pics de consommation.' }} />
                : <span dangerouslySetInnerHTML={{ __html: 'Gravity Gym est la première salle qui réinjecte votre énergie cinétique directement dans le réseau. <strong class="text-nature font-semibold">Votre sueur devient de l\'électricité verte.</strong>' }} />
              }
            </p>

            {audience === 'B2B' ? (
              <ul className="space-y-5 font-sans text-base text-white/90 relative z-10">
                <li className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="text-nature font-bold text-lg">✓</span>
                  Jusqu'à 18% des besoins électriques tertiaires effacés
                </li>
                <li className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="text-nature font-bold text-lg">✓</span>
                  Génération continue de revenus (Micro-onduleurs réseau)
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-nature font-bold text-lg">✓</span>
                  Bouclier réglementaire immédiat (Décret Tertiaire)
                </li>
              </ul>
            ) : (
              <ul className="space-y-5 font-sans text-base text-white/90 relative z-10">
                <li className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="text-nature font-bold text-lg">✓</span>
                  Impact écologique direct et mesurable
                </li>
                <li className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="text-nature font-bold text-lg">✓</span>
                  Matériel premium et design unique
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-nature font-bold text-lg">✓</span>
                  Communauté engagée pour la transition
                </li>
              </ul>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
