import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useAudience } from '../../context/AudienceContext';
import './Hero.css';
import bgVideo from '../../assets/media/hero-bg.mp4';
import bgFallback from '../../assets/media/hero-bg-fallback.png';

export function Hero() {
  const { audience } = useAudience();

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center p-4 md:p-8 overflow-hidden bg-carbon-dark">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster={bgFallback}
          className="w-full h-full object-cover opacity-70"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        {/* Sleek smooth vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-dark/20 via-transparent to-carbon-dark"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-carbon-dark/80"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center mt-20">
        
        <motion.div
          className="glass-panel p-8 md:p-12 max-w-5xl rounded-2xl flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 bg-nature/10 text-nature font-bold tracking-widest uppercase text-xs shadow-glow-nature border border-nature/20 rounded-full mb-8">
            {audience === 'B2B' ? 'Infrastructures & Fitness' : 'Le Club Pilote (Paris)'}
          </span>
          <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9] text-concrete mb-6 text-shadow-xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
            L'ÉNERGIE DE LA VILLE. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nature to-brass">CRÉÉE PAR L'EFFORT.</span>
          </h1>
          
          <p className="font-body text-base md:text-xl font-light text-concrete-light max-w-2xl mx-auto leading-relaxed mb-10 opacity-90">
            {audience === 'B2B' 
              ? "Gravity Gym fusionne l'attractivité du fitness ultra-premium avec une infrastructure de stockage énergétique propriétaire à l'échelle du mégawatt."
              : "Le premier club de fitness ultra-premium où chaque coup de pédale génère de l'électricité propre pour votre quartier."}
          </p>

          <a href="#dataroom" className="bg-nature text-carbon-dark inline-block font-sans font-extrabold text-base md:text-lg uppercase px-8 md:px-10 py-4 transition-all rounded-sm shadow-glow-nature hover:bg-emerald-400 hover:scale-105">
            {audience === 'B2B' ? 'Dossier Investisseur (Data Room)' : "Rejoindre la liste d'attente"}
          </a>
        </motion.div>

      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span className="font-sans font-semibold text-nature tracking-widest uppercase text-xs opacity-70">
          {audience === 'B2B' ? "L'Opportunité Arbitrage" : "Découvrir le Concept"}
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={30} className="text-nature/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
