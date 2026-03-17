import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import './Hero.css';
import bgVideo from '../../assets/media/hero-bg.mp4';
import bgFallback from '../../assets/media/hero-bg-fallback.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center p-4 md:p-8 overflow-hidden bg-carbon">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster={bgFallback}
          className="w-full h-full object-cover grayscale opacity-60"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        {/* Dark brutalist overlay */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center mt-20">
        
        <motion.div
          className="bg-concrete text-carbon-dark p-8 md:p-16 border-4 border-black shadow-[12px_12px_0px_#111111] max-w-5xl"
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-2 bg-energy text-concrete font-bold tracking-widest uppercase text-xs md:text-sm mb-8 border-2 border-black">
            Infrastructures & Fitness
          </span>
          <h1 className="font-heading font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter uppercase leading-[0.85] text-carbon-dark mb-8">
            SWEAT INTO <br/>
            <span className="text-wood">GRID POWER.</span>
          </h1>
          
          <p className="font-body text-base md:text-xl lg:text-2xl font-semibold text-carbon max-w-3xl mx-auto leading-snug mb-10">
            Gravity Gym fusionne l'économie récurrente du fitness ultra-premium avec une infrastructure de stockage énergétique propriétaire à l'échelle du mégawatt. Rentable dès l'ouverture, indispensable pour le réseau.
          </p>

          <button className="bg-wood text-carbon-dark font-heading font-black text-lg md:text-2xl uppercase px-8 md:px-12 py-4 md:py-6 border-4 border-black shadow-[8px_8px_0px_#111111] hover:translate-y-1 hover:shadow-[4px_4px_0px_#111111] transition-all rounded-none">
            Demander le Confidential Deck
          </button>
        </motion.div>

      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span className="font-heading font-black text-concrete tracking-widest uppercase text-sm border-b-4 border-wood pb-1">
          L'Opportunité Arbitrage
        </span>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        >
          <ArrowDown size={40} className="text-wood" />
        </motion.div>
      </motion.div>
    </section>
  );
}
