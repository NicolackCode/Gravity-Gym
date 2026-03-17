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
    <section id="technologicalmoat" className="bg-carbon text-concrete py-24 md:py-32 px-4 border-b-4 border-black relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left: Copy & Context */}
        <div className="flex-1">
          <span className="inline-block px-3 py-1 bg-concrete text-carbon-dark font-bold tracking-widest uppercase text-xs mb-6 border-2 border-concrete">
            Technological Moat / IP
          </span>
          <h2 className="font-heading font-black text-5xl md:text-7xl uppercase tracking-tighter leading-none mb-8">
            LA BATTERIE <br/>
            <span className="text-wood">ARCHITECTURALE</span>
            <br/>
            <span className="text-3xl md:text-5xl">12.5 TONNES D'AVANTAGE CONCURRENTIEL.</span>
          </h2>
          
          <p className="font-body text-xl font-medium text-concrete-light mb-8 max-w-xl">
            Stockage mécanique par gravité. Zéro lithium. Zéro dégradation. 100% d'autonomie. Un monument de béton couplé à des micro-onduleurs pour transformer l'énergie cinétique humaine en électricité réseau monétisable.
          </p>
          
          <div className="flex gap-4 mb-4">
            <div className="bg-bg-panel border-2 border-concrete p-4 text-center">
              <span className="block font-mono text-xs text-wood mb-1 uppercase">Metric</span>
              <span className="font-heading font-black text-2xl">E=mgh</span>
            </div>
            <div className="bg-bg-panel border-2 border-concrete p-4 text-center">
              <span className="block font-mono text-xs text-wood mb-1 uppercase">Rendement</span>
              <span className="font-heading font-black text-2xl">74%</span>
            </div>
            <div className="bg-bg-panel border-2 border-concrete p-4 text-center">
              <span className="block font-mono text-xs text-wood mb-1 uppercase">Cycle de vie</span>
              <span className="font-heading font-black text-2xl">50 ANS</span>
            </div>
          </div>
        </div>

        {/* Right: Industrial Dashboard & Animation */}
        <div className="flex-1 w-full max-w-md bg-black border-4 border-concrete shadow-[12px_12px_0px_#E4E4E4] p-6 relative">
          <div className="flex justify-between items-center border-b-2 border-carbon pb-4 mb-6">
            <h3 className="font-mono text-concrete-light tracking-widest uppercase text-sm">Terminal Contrôle</h3>
            <span className="flex items-center gap-2 font-mono text-xs text-energy">
              <span className="h-2 w-2 bg-energy rounded-none animate-pulse"></span>
              EN PRODUCTION
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-carbon border border-concrete/20 p-4">
              <span className="block font-mono text-xs text-concrete-light mb-2">ÉLÉVATION (m)</span>
              <span className="font-mono text-3xl font-bold text-concrete">{height.toFixed(2)}</span>
              <span className="text-energy text-xs ml-2">↑</span>
            </div>
            <div className="bg-carbon border border-concrete/20 p-4">
              <span className="block font-mono text-xs text-concrete-light mb-2">OUTPUT (kWh)</span>
              <span className="font-mono text-3xl font-bold text-wood">{kwh.toFixed(1)}</span>
            </div>
          </div>

          {/* Schematic Animation of the Mass */}
          <div className="relative h-64 border-2 border-concrete/30 bg-carbon overflow-hidden flex items-end justify-center">
            {/* Context Grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
            
            <motion.div 
              className="w-1/2 bg-concrete border-4 border-black relative z-10 flex items-center justify-center p-2 text-center"
              style={{ height: `${(height / 15) * 100}%`, minHeight: '60px' }}
              transition={{ ease: "linear", duration: 1.5 }}
            >
              <span className="font-heading font-black text-carbon-dark text-xl leading-none">MASSE<br/>12.5T</span>
            </motion.div>
            
            {/* Guide cables */}
            <div className="absolute top-0 bottom-0 left-[25%] w-px bg-wood/50"></div>
            <div className="absolute top-0 bottom-0 right-[25%] w-px bg-wood/50"></div>
            
            {/* @MotionDesignTeam : Implémenter le Canvas WebGL complet ici */}
          </div>
          <div className="mt-4 font-mono text-[10px] text-concrete-light/50 text-right">
            /* Rendu schématique simplifié. Point d'insertion WebGL validé. */
          </div>
        </div>

      </div>
    </section>
  );
}
