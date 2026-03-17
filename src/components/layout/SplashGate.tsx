import { motion } from 'framer-motion';
import { useAudience } from '../../context/AudienceContext';
import { Building2, Users } from 'lucide-react';

export function SplashGate() {
  const { setAudience } = useAudience();

  return (
    <div className="min-h-screen bg-carbon flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nature/10 blur-[150px] rounded-full pointer-events-none"></div>

      <motion.div 
        className="relative z-10 w-full max-w-4xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="text-brass text-4xl drop-shadow-[0_0_15px_rgba(245,158,11,0.5)] inline-block">⚡</span>
          <span className="font-heading font-black tracking-tight text-4xl md:text-5xl text-concrete uppercase">GRAVITY GYM</span>
        </div>

        <h1 className="font-heading font-black text-3xl md:text-5xl text-white mb-6 uppercase tracking-tighter">
          Bienvenue dans la Révolution.
        </h1>
        <p className="font-sans text-concrete-light text-lg mb-16 opacity-80 max-w-2xl mx-auto font-light">
          Pour une expérience optimale, veuillez sélectionner votre profil ci-dessous.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          
          <motion.div 
            onClick={() => setAudience('B2C')}
            className="glass-panel p-8 md:p-10 rounded-2xl border border-white/5 hover:bg-white/5 hover:border-nature/50 transition-all cursor-pointer group shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col items-center text-center"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-20 h-20 rounded-full bg-carbon border border-white/10 flex items-center justify-center mb-6 group-hover:border-nature/50 group-hover:shadow-glow-nature transition-all">
              <Users className="text-white group-hover:text-nature transition-colors" size={32} />
            </div>
            <h2 className="font-heading font-black text-2xl text-white mb-3 uppercase tracking-wider">
              Le Particulier
            </h2>
            <p className="font-sans text-sm text-concrete-light/70 font-light leading-relaxed">
              Vous cherchez une nouvelle façon de vous entraîner, où votre effort a un impact écologique direct. Découvrez le club pilote.
            </p>
          </motion.div>

          <motion.div 
            onClick={() => setAudience('B2B')}
            className="glass-panel p-8 md:p-10 rounded-2xl border border-white/5 hover:bg-white/5 hover:border-brass/50 transition-all cursor-pointer group shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col items-center text-center relative overflow-hidden"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute -inset-4 bg-brass/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="w-20 h-20 rounded-full bg-carbon border border-white/10 flex items-center justify-center mb-6 group-hover:border-brass/50 group-hover:shadow-glow-brass transition-all relative z-10">
              <Building2 className="text-white group-hover:text-brass transition-colors" size={32} />
            </div>
            <h2 className="font-heading font-black text-2xl text-white mb-3 uppercase tracking-wider relative z-10">
              Le Professionnel
            </h2>
            <p className="font-sans text-sm text-concrete-light/70 font-light leading-relaxed relative z-10">
              Vous êtes Investisseur (VC), Promoteur Immobilier ou Asset Manager cherchant à optimiser le DPE tertiaire via notre technologie.
            </p>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
