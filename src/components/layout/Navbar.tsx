import { motion } from 'framer-motion';
import { useAudience } from '../../context/AudienceContext';

export function Navbar() {
  const { audience, setAudience } = useAudience();

  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full z-50 glass-panel"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => setAudience(null)}
          title="Retourner à l'accueil"
        >
          <span className="text-brass text-xl leading-none drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">⚡</span>
          <span className="font-heading font-black tracking-tight text-xl text-concrete uppercase">GRAVITY GYM</span>
        </div>
        
        <div className="hidden md:flex gap-8 font-sans font-semibold text-concrete-light text-sm uppercase tracking-wide">
          {audience === 'B2B' ? (
            <>
              <a href="#problemopportunity" className="hover:text-nature transition-colors drop-shadow-md">L'Arbitrage</a>
              <a href="#uniteconomics" className="href-nav hover:text-nature transition-colors drop-shadow-md">Le Modèle</a>
              <a href="#technologicalmoat" className="href-nav hover:text-nature transition-colors drop-shadow-md">La Technologie</a>
            </>
          ) : (
            <>
              <a href="#problemopportunity" className="hover:text-nature transition-colors drop-shadow-md">Le Concept</a>
              <a href="#architecture" className="href-nav hover:text-nature transition-colors drop-shadow-md">La Salle</a>
            </>
          )}
        </div>

        <a href="#dataroom" className="bg-nature/10 text-nature font-sans font-bold text-sm md:text-xs uppercase px-5 py-2 border border-nature/50 hover:bg-nature/20 transition-all rounded-sm shadow-glow-nature text-center">
          {audience === 'B2B' ? 'Data Room' : 'Rejoindre'}
        </a>
      </div>
    </motion.nav>
  );
}
