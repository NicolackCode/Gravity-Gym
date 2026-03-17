import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full z-50 bg-carbon border-b-4 border-black"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="bg-wood text-carbon-dark p-1 border-2 border-black font-black font-mono leading-none">⚡</span>
          <span className="font-heading font-black tracking-tighter text-2xl text-concrete uppercase">GRAVITY GYM</span>
        </div>
        
        <div className="hidden md:flex gap-8 font-mono font-bold text-concrete-light text-sm uppercase">
          <a href="#problemopportunity" className="hover:text-wood transition-colors">Op' / Arbitrage</a>
          <a href="#uniteconomics" className="href-nav hover:text-wood transition-colors">Unit Economics</a>
          <a href="#technologicalmoat" className="href-nav hover:text-wood transition-colors">Tech Moat</a>
        </div>

        <button className="bg-concrete text-carbon-dark font-heading font-black text-sm md:text-base uppercase px-6 py-2 border-4 border-black shadow-[4px_4px_0px_#111111] hover:mt-[2px] hover:ml-[2px] hover:shadow-[2px_2px_0px_#111111] transition-all rounded-none">
          Data Room
        </button>
      </div>
    </motion.nav>
  );
}
