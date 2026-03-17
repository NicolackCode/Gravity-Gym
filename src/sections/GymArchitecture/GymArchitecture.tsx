import { motion } from 'framer-motion';
import videoSrc from '../../assets/media/impact-bg.mp4';

export function GymArchitecture() {
  return (
    <section id="architecture" className="bg-carbon text-concrete py-24 md:py-32 relative z-10 overflow-hidden border-b border-black">
      
      {/* Background ambient light */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-nature/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 mb-16 md:mb-24 flex flex-col md:flex-row gap-8 items-end justify-between">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 bg-nature/10 text-nature font-bold tracking-widest uppercase text-xs mb-6 rounded-full border border-nature/20 shadow-glow-nature">
            Design & Espace
          </span>
          <h2 className="font-heading font-black text-4xl md:text-6xl uppercase tracking-tighter mb-6 text-white text-shadow-sm">
            L'Architecture<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nature to-emerald-400">Éco-Brutaliste</span>
          </h2>
          <p className="font-sans text-lg font-light text-concrete-light opacity-90 leading-relaxed">
            Un sanctuaire de l'effort. Des matériaux bruts, du béton texturé, et une végétalisation intégrée. La batterie gravitationnelle trône au centre, transformant chaque watt généré en spectacle vivant.
          </p>
        </motion.div>
      </div>

      {/* Video Showcase Player */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="glass-panel rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative group">
          
          <div className="absolute inset-0 bg-gradient-to-t from-carbon-dark via-transparent to-transparent z-10 opacity-60"></div>
          
          <video 
            src={videoSrc} 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 flex justify-between items-end">
            <div>
              <span className="font-mono text-xs text-nature mb-2 block uppercase tracking-widest font-bold drop-shadow-md">Aperçu Pilote Actif</span>
              <h3 className="font-heading font-black text-2xl md:text-4xl text-white uppercase tracking-tighter drop-shadow-lg">
                Le Noyau Central
              </h3>
            </div>
            
            <div className="hidden md:flex gap-6 font-mono text-xs text-concrete-light/70 uppercase tracking-widest">
              <div className="flex flex-col items-end">
                <span>Superficie</span>
                <span className="text-white font-bold text-lg mt-1">1,200 m²</span>
              </div>
              <div className="flex flex-col items-end">
                <span>Capacité</span>
                <span className="text-white font-bold text-lg mt-1">80 Postes</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
