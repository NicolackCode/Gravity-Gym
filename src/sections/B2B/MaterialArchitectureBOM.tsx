import { motion } from 'framer-motion';
import { Settings, Zap, Cpu, Anchor, ArrowRight } from 'lucide-react';

export function MaterialArchitectureBOM() {
  return (
    <section id="bom" className="bg-carbon text-concrete py-24 md:py-32 px-4 relative z-10 overflow-hidden border-b border-white/5">
      {/* Ambient background light */}
      <div className="absolute right-0 top-1/3 w-[600px] h-[600px] bg-brass/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="mb-16 md:mb-24 text-center md:text-left max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 bg-brass/10 text-brass font-bold tracking-widest uppercase text-xs mb-6 rounded-full border border-brass/20 shadow-glow-brass">
            Génie Mécanique
          </span>
          <h2 className="font-heading font-black text-4xl md:text-6xl uppercase tracking-tighter mb-6 text-white text-shadow-sm">
            Ingénierie <span className="text-transparent bg-clip-text bg-gradient-to-r from-brass to-amber-200">Matérielle</span>
          </h2>
          <p className="font-sans text-lg font-light text-concrete-light opacity-90 leading-relaxed">
            Transparence totale sur notre chaîne d'approvisionnement (Bill of Materials). Nos postes de travail sont rétrofités avec des composants industriels ultra-matures, minimisant drastiquement le risque R&D.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Timeline / Chain */}
          <div className="flex-1 flex flex-col gap-6 relative">
            {/* Vertical connector line for desktop */}
            <div className="hidden md:block absolute left-12 top-12 bottom-12 w-px bg-gradient-to-b from-brass/5 via-brass/30 to-brass/5 pointer-events-none"></div>

            <motion.div className="glass-panel p-6 rounded-2xl flex items-center gap-6 relative z-10 border border-white/5 hover:bg-white/5 transition-colors" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="w-16 h-16 rounded-full bg-black/50 border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
                <Settings className="text-concrete-light" size={28} />
              </div>
              <div>
                <h4 className="font-heading font-black text-xl text-white tracking-widest uppercase mb-1">Vélo de Spinning</h4>
                <p className="font-sans text-sm text-concrete-light/70 font-light">Châssis propriétaire Eco-Brutalist</p>
              </div>
            </motion.div>
            
            <div className="md:hidden flex justify-center -my-2 text-brass/50"><ArrowRight className="rotate-90" /></div>
            
            <motion.div className="glass-panel p-6 rounded-2xl flex items-center gap-6 relative z-10 border border-white/5 hover:bg-white/5 transition-colors" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="w-16 h-16 rounded-full bg-black/50 border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
                <Anchor className="text-concrete-light" size={28} />
              </div>
              <div>
                <h4 className="font-heading font-black text-xl text-white tracking-widest uppercase mb-1">Alternateur (200-800W)</h4>
                <p className="font-sans text-sm text-concrete-light/70 font-light">Moteur à aimant permanent triphasé.<br/><span className="text-brass font-medium">Coût unitaire : 140€ - 200€</span></p>
              </div>
            </motion.div>

            <div className="md:hidden flex justify-center -my-2 text-brass/50"><ArrowRight className="rotate-90" /></div>

            <motion.div className="glass-panel p-6 rounded-2xl flex items-center gap-6 relative z-10 border border-white/5 hover:bg-white/5 transition-colors" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="w-16 h-16 rounded-full bg-black/50 border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
                <Cpu className="text-concrete-light" size={28} />
              </div>
              <div>
                <h4 className="font-heading font-black text-xl text-white tracking-widest uppercase mb-1">Pont Redresseur</h4>
                <p className="font-sans text-sm text-concrete-light/70 font-light">Conversion AC/DC + Condensateur.<br/><span className="text-brass font-medium">Coût: 15€ - 25€</span></p>
              </div>
            </motion.div>

            <div className="md:hidden flex justify-center -my-2 text-brass/50"><ArrowRight className="rotate-90" /></div>

            <motion.div className="glass-panel p-6 rounded-2xl flex items-center gap-6 relative z-10 border border-brass/30 bg-brass/5 shadow-[0_0_30px_rgba(245,158,11,0.1)] group" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className="w-16 h-16 rounded-full bg-brass/20 border border-brass/50 flex items-center justify-center shrink-0 shadow-glow-brass">
                <Zap className="text-brass" size={28} />
              </div>
              <div>
                <h4 className="font-heading font-black text-xl text-white tracking-widest uppercase mb-1 group-hover:text-brass transition-colors">Micro-Onduleur Enphase IQ8</h4>
                <p className="font-sans text-sm text-concrete-light/70 font-light">Rendement &gt;97%. Synchronisation réseau certifiée.<br/><span className="text-brass font-medium">Coût: ~159€ - 215€</span></p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="flex-1 flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {/* Summary Panel */}
            <div className="glass-panel p-8 md:p-12 rounded-2xl border-t border-t-white/10 relative overflow-hidden bg-gradient-to-br from-carbon-dark to-black">
              <div className="absolute -inset-10 bg-nature/5 blur-[50px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10 mb-12 border-b border-white/10 pb-10">
                <span className="block font-sans text-sm font-bold uppercase tracking-widest text-concrete-light/60 mb-4">Coût Global de Rétrofit Estimé</span>
                <div className="flex items-baseline gap-3">
                  <span className="font-heading font-black text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-brass to-amber-200">315€</span>
                  <span className="text-concrete-light font-mono text-xl">— 440€</span>
                </div>
                <span className="block mt-4 text-sm font-mono text-zinc-400">/ poste (hors châssis)</span>
              </div>
              
              <div className="relative z-10">
                <h5 className="font-heading font-bold text-lg text-white mb-3 tracking-widest uppercase">Stratégie OEM (Achat sur étagère)</h5>
                <p className="font-sans text-sm text-concrete-light/80 font-light leading-relaxed">
                  Pour le club pilote, nous prévoyons un partenariat constructeur exclusif basé sur 
                  l'ingénierie interne de la gamme Eco-Powr (équipements générateurs certifiés), 
                  tout en habillant la machine de notre identité visuelle premium.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
