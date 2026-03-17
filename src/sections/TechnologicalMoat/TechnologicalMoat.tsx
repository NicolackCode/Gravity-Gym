import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function TechnologicalMoat() {
  const [kwh, setKwh] = useState(12450.8);
  const [height, setHeight] = useState(2.4);

  // Simulate real-time energy production and mass elevation
  useEffect(() => {
    const interval = setInterval(() => {
      setKwh(prev => prev + (Math.random() * 0.04 + 0.01));
      setHeight(prev => prev < 15 ? prev + (Math.random() * 0.02) : prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="technologicalmoat" className="bg-carbon-dark text-concrete py-24 md:py-32 px-4 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient from-carbon/50 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center relative z-10">
        
        {/* Left: Copy & Context */}
        <div className="flex-1">
          <span className="inline-block px-3 py-1 bg-nature/10 text-nature border border-nature/20 rounded-full font-bold tracking-widest uppercase text-xs mb-6 shadow-glow-nature">
            Avantage Technologique / IP Propriétaire
          </span>
          <h2 className="font-heading font-black text-4xl md:text-6xl uppercase tracking-tighter leading-tight mb-8">
            LA BATTERIE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brass to-amber-200">ARCHITECTURALE</span>
            <br/>
            <span className="text-2xl md:text-4xl text-white drop-shadow-md">12.5 TONNES D'AVANTAGE CONCURRENTIEL.</span>
          </h2>
          
          <p className="font-sans text-lg font-light text-concrete-light mb-8 max-w-xl leading-relaxed opacity-90">
            Stockage mécanique par gravité. Zéro lithium. Zéro dégradation. 100% d'autonomie algorithmique. Un noyau de béton couplé à des micro-onduleurs intelligents pour transformer l'énergie cinétique du club en électricité réseau monétisable.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="glass-panel border-t border-t-white/10 p-4 min-w-[120px] rounded-xl text-center group hover:bg-white/5 transition-colors">
              <span className="block font-sans font-bold text-xs text-concrete-light/60 mb-1 uppercase tracking-wider">Metric</span>
              <span className="font-heading font-black text-2xl text-white group-hover:text-brass transition-colors">E=mgh</span>
            </div>
            <div className="glass-panel border-t border-t-white/10 p-4 min-w-[120px] rounded-xl text-center group hover:bg-white/5 transition-colors">
              <span className="block font-sans font-bold text-xs text-concrete-light/60 mb-1 uppercase tracking-wider">Rendement</span>
              <span className="font-heading font-black text-2xl text-nature drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">74%</span>
            </div>
            <div className="glass-panel border-t border-t-white/10 p-4 min-w-[120px] rounded-xl text-center group hover:bg-white/5 transition-colors">
              <span className="block font-sans font-bold text-xs text-concrete-light/60 mb-1 uppercase tracking-wider">Cycle de vie</span>
              <span className="font-heading font-black text-2xl text-white">50 ANS</span>
            </div>
          </div>
        </div>

        {/* Right: Premium Tech Dashboard & Animation */}
        <div className="flex-1 w-full max-w-md glass-panel bg-black/60 border border-white/5 rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-brass/5 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6 relative z-10">
            <h3 className="font-mono text-concrete-light/70 tracking-widest uppercase text-xs font-bold">Terminal Contrôle</h3>
            <span className="flex items-center gap-2 font-sans font-bold text-xs text-nature bg-nature/10 px-2 py-1 rounded-full border border-nature/20">
              <span className="h-1.5 w-1.5 bg-nature rounded-full shadow-[0_0_5px_#10b981] animate-pulse"></span>
              EN PRODUCTION
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
            <div className="bg-carbon/50 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center">
              <span className="block font-sans font-bold text-[10px] text-concrete-light/50 mb-2 tracking-widest uppercase">ÉLÉVATION (m)</span>
              <div className="flex items-end gap-1">
                <span className="font-mono text-3xl font-light text-white">{height.toFixed(2)}</span>
                <span className="text-nature text-sm mb-1">↑</span>
              </div>
            </div>
            <div className="bg-carbon/50 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center">
              <span className="block font-sans font-bold text-[10px] text-concrete-light/50 mb-2 tracking-widest uppercase">OUTPUT (kWh)</span>
              <span className="font-mono text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brass to-amber-200">{kwh.toFixed(1)}</span>
            </div>
          </div>

          {/* Schematic Animation of the Mass - Premium Look */}
          <div className="relative h-64 border border-white/10 rounded-xl bg-carbon-dark/80 overflow-hidden flex items-end justify-center z-10 shadow-inner">
            {/* Tech Grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            
            {/* Glowing core mass */}
            <motion.div 
              className="w-1/2 bg-gradient-to-t from-carbon to-carbon-light border border-white/20 rounded-t-sm relative z-10 flex flex-col items-center justify-center p-2 text-center shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              style={{ height: `${(height / 15) * 100}%`, minHeight: '60px' }}
              transition={{ ease: "linear", duration: 1.5 }}
            >
              <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-brass/50 to-transparent"></div>
              <span className="font-heading font-black text-white text-lg leading-none tracking-widest opacity-80">MASSE</span>
              <span className="font-mono text-brass text-sm font-bold opacity-90 mt-1">12.5T</span>
            </motion.div>
            
            {/* Guide cables (Neon style) */}
            <div className="absolute top-0 bottom-0 left-[25%] w-px bg-gradient-to-b from-brass/5 via-brass/30 to-brass/5 shadow-[0_0_5px_rgba(245,158,11,0.2)]"></div>
            <div className="absolute top-0 bottom-0 right-[25%] w-px bg-gradient-to-b from-brass/5 via-brass/30 to-brass/5 shadow-[0_0_5px_rgba(245,158,11,0.2)]"></div>
          </div>
          <div className="mt-4 font-mono text-[10px] text-concrete-light/30 text-center tracking-widest uppercase">
            // Rendu télémétrique sécurisé. Flux de données actif.
          </div>
        </div>

      </div>
    </section>
  );
}
