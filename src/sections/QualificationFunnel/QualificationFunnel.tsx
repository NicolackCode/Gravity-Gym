import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudience } from '../../context/AudienceContext';

export function QualificationFunnel() {
  const { audience } = useAudience();
  const [step, setStep] = useState(1);
  const [intent, setIntent] = useState('');
  const [ticket, setTicket] = useState('');
  const [email, setEmail] = useState('');

  const handleIntent = (val: string) => {
    setIntent(val);
    if (val === 'CAPITAL-RISQUE') {
      setStep(2);
    } else {
      setStep(3);
    }
  };

  const handleTicket = (val: string) => {
    setTicket(val);
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Données capturées : ${intent} | ${ticket} | ${email}`);
    // Handle form submission logic here
  };

  return (
    <section id="dataroom" className="bg-carbon text-concrete py-24 md:py-32 px-4 relative z-10 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-nature/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter mb-4 text-white text-shadow-sm">
              {audience === 'B2B' ? 'DATA ROOM CONFIDENTIELLE' : 'REJOIGNEZ LE CLUB PILOTE'}
            </h2>
            <p className="font-sans text-lg font-light text-concrete-light opacity-80 max-w-xl mx-auto">
              {audience === 'B2B' 
                ? 'Accès sécurisé réservé aux partenaires financiers et promoteurs institutionnels.'
                : 'Les places pour notre première salle parisienne sont limitées à 500 membres actifs.'}
            </p>
          </div>

          {/* Premium Terminal UI */}
          <div className="glass-panel border-t border-t-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brass/50 to-transparent opacity-80"></div>
            
            <div className="font-mono text-concrete-light/50 text-xs mb-12 flex justify-between border-b border-white/5 pb-4 tracking-widest uppercase">
              <span>Security Layer : {audience === 'B2B' ? 'INIT_SEQ' : 'WAITLIST_PROTO'}</span>
              <span className="text-brass flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brass rounded-full shadow-glow-brass animate-pulse"></span>
                Lien Chiffré
              </span>
            </div>

            <div className="min-h-[250px] flex items-center justify-center">
              <AnimatePresence mode="wait">

                {audience === 'B2C' && (
                  <motion.div 
                    key="b2c-step"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full text-center"
                  >
                    <h3 className="font-heading font-black text-white text-2xl md:text-3xl tracking-tight mb-8">
                      Accès Prioritaire. <br/> <span className="text-brass font-light text-xl drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]">Réservez votre place dès aujourd'hui.</span>
                    </h3>
                    <form onSubmit={(e) => { e.preventDefault(); alert(`Waitlist capturée : ${email}`); }} className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                      <input 
                        type="email" 
                        placeholder="Votre adresse email..." 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 bg-black/40 text-white font-sans font-medium py-4 px-6 rounded-lg border border-white/10 focus:border-brass/50 focus:bg-black/60 outline-none transition-all placeholder:text-concrete-light/30"
                      />
                      <button 
                        type="submit"
                        className="bg-nature text-carbon-dark font-sans font-black uppercase tracking-wider px-8 py-4 rounded-lg shadow-glow-nature hover:bg-emerald-400 hover:scale-105 transition-all"
                      >
                        S'inscrire
                      </button>
                    </form>
                  </motion.div>
                )}
                
                {audience === 'B2B' && step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full text-center"
                >
                  <h3 className="font-heading font-black text-white text-2xl md:text-3xl tracking-tight mb-8">
                    Procédure d'authentification. <br/> <span className="text-concrete-light/70 font-light text-xl">Quelle est la nature de votre entité ?</span>
                  </h3>
                  <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <button 
                      onClick={() => handleIntent('CAPITAL-RISQUE')}
                      className="bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-brass/50 hover:text-brass font-sans font-semibold py-4 px-8 rounded-lg uppercase tracking-wider transition-all"
                    >
                      Capital-Risque
                    </button>
                    <button 
                      onClick={() => handleIntent('REAL ESTATE')}
                      className="bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-brass/50 hover:text-brass font-sans font-semibold py-4 px-8 rounded-lg uppercase tracking-wider transition-all"
                    >
                      Promoteur Immobilier
                    </button>
                    <button 
                      onClick={() => handleIntent('MÉDIAS')}
                      className="bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-brass/50 hover:text-brass font-sans font-semibold py-4 px-8 rounded-lg uppercase tracking-wider transition-all"
                    >
                      Presse & Médias
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ÉTAPE 2 (Conditionnelle VC) */}
              {audience === 'B2B' && step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full text-center"
                >
                  <h3 className="font-heading font-black text-white text-2xl md:text-3xl tracking-tight mb-8">
                    Qualification du DealFlow. <br/> <span className="text-concrete-light/70 font-light text-xl">Quel est votre ticket d'investissement (Série A) ?</span>
                  </h3>
                  <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <button 
                      onClick={() => handleTicket('< 2M€')}
                      className="bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-brass/50 hover:text-brass font-sans font-semibold py-4 px-8 rounded-lg uppercase tracking-wider transition-all"
                    >
                      &lt; 2M€
                    </button>
                    <button 
                      onClick={() => handleTicket('2M€ - 10M€')}
                      className="bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-brass/50 hover:text-brass font-sans font-semibold py-4 px-8 rounded-lg uppercase tracking-wider transition-all"
                    >
                      2M€ - 10M€
                    </button>
                    <button 
                      onClick={() => handleTicket('> 10M€')}
                      className="bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-brass/50 hover:text-brass font-sans font-semibold py-4 px-8 rounded-lg uppercase tracking-wider transition-all"
                    >
                      &gt; 10M€
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ÉTAPE 3 (Capture) */}
              {audience === 'B2B' && step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full text-center"
                >
                  <h3 className="font-heading font-black text-white text-2xl md:text-3xl tracking-tight mb-8">
                    Entité identifiée. <br/> <span className="text-brass font-light text-xl drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]">Destination du Deck Confidentiel ?</span>
                  </h3>
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                    <input 
                      type="email" 
                      placeholder="Email professionnel..." 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-black/40 text-white font-sans font-medium py-4 px-6 rounded-lg border border-white/10 focus:border-brass/50 focus:bg-black/60 outline-none transition-all placeholder:text-concrete-light/30"
                    />
                    <button 
                      type="submit"
                      className="bg-brass text-carbon-dark font-sans font-black uppercase tracking-wider px-8 py-4 rounded-lg shadow-glow-brass hover:bg-amber-400 hover:scale-105 transition-all"
                    >
                      Générer L'Accès
                    </button>
                  </form>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
