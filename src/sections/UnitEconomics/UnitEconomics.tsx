import { motion } from 'framer-motion';

export function UnitEconomics() {
  return (
    <section id="uniteconomics" className="bg-carbon text-concrete py-24 md:py-32 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:justify-between md:items-end border-b border-white/10 pb-8">
          <div>
            <span className="inline-block px-3 py-1 bg-brass/10 text-brass font-bold tracking-widest uppercase text-xs mb-4 rounded-full border border-brass/20 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
              Hyper-Croissance Garantie
            </span>
            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter text-white">
              LE MODÈLE ÉCONOMIQUE
            </h2>
          </div>
          <p className="font-sans text-concrete-light max-w-sm mt-6 md:mt-0 font-light text-lg opacity-80 leading-relaxed">
            Un ratio LTV/CAC inatteignable par le fitness traditionnel, propulsé par l'engagement écologique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <motion.div 
            className="glass-panel p-6 rounded-2xl flex flex-col hover:-translate-y-2 transition-transform duration-300 group relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 bg-orange-500/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <span className="font-mono text-orange-500 text-xs tracking-widest uppercase mb-4 opacity-80 relative z-10">01 / CAPEX Matériel</span>
            <div className="mt-auto relative z-10">
              <span className="block font-heading font-black text-4xl mb-2 text-white group-hover:text-orange-400 transition-colors">315€</span>
              <span className="font-sans text-concrete-light text-sm font-semibold uppercase tracking-wide">Coût de Rétrofit <br/> (Par Poste)</span>
            </div>
            <p className="mt-6 text-sm text-concrete-light/70 border-t border-white/5 pt-4 font-light leading-relaxed relative z-10">Faible risque R&D. Composants industriels matures et onduleurs certifiés.</p>
          </motion.div>

          <motion.div 
            className="glass-panel bg-gradient-to-br from-carbon-dark to-carbon p-6 rounded-2xl flex flex-col hover:-translate-y-2 transition-transform duration-300 group border-t border-t-nature/30 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="absolute -inset-4 bg-nature/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <span className="font-mono text-nature text-xs tracking-widest uppercase mb-4 opacity-80 relative z-10">02 / OPEX Réseau</span>
            <div className="mt-auto relative z-10">
              <span className="block font-heading font-black text-4xl mb-2 text-nature drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">- 18%</span>
              <span className="font-sans text-concrete-light text-sm font-semibold uppercase tracking-wide block mt-1">Réduction de Consommation <br/>(Bouclier Tertiaire)</span>
            </div>
            <p className="mt-6 text-sm text-concrete-light/70 border-t border-white/5 pt-4 font-light leading-relaxed relative z-10">L'autoconsommation humaine de 250 W/h neutralise la surcharge de la climatisation en pic.</p>
          </motion.div>

          <motion.div 
            className="glass-panel p-6 rounded-2xl flex flex-col hover:-translate-y-2 transition-transform duration-300 group relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute -inset-4 bg-zinc-400/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <span className="font-mono text-zinc-400 text-xs tracking-widest uppercase mb-4 relative z-10">03 / ARPU & Pricing</span>
            <div className="mt-auto relative z-10">
              <span className="block font-heading font-black text-3xl mb-2 text-white group-hover:text-zinc-300 transition-colors">PREMIUM</span>
              <span className="font-sans text-concrete-light text-sm font-semibold uppercase tracking-wide">Willingness To Pay (WTP)<br/>Maximisée</span>
            </div>
            <p className="mt-6 text-sm text-concrete-light/70 border-t border-white/5 pt-4 font-light leading-relaxed relative z-10">La Gen Z et les Millennials affichent un WTP 65% supérieur pour un impact réel et transparent.</p>
          </motion.div>

          <motion.div 
            className="glass-panel border border-brass/40 bg-brass/5 p-6 rounded-2xl flex flex-col hover:-translate-y-2 transition-transform duration-300 group relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute -inset-4 bg-brass/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <span className="font-mono text-brass tracking-widest uppercase mb-4 font-bold text-xs relative z-10">04 / LTV / CAC</span>
            <div className="mt-auto relative z-10">
              <span className="block font-heading font-black text-5xl mb-2 text-white drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">&gt; 3:1</span>
              <span className="font-sans text-white text-sm font-bold uppercase tracking-wide">Métrique SaaS <br/>Appliquée au Retail</span>
            </div>
            <p className="mt-6 text-sm text-concrete-light/90 border-t border-brass/20 pt-4 font-light leading-relaxed relative z-10">Acquisition propulsée par la viralité organique. Rétention verrouillée par la gamification sociale.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
