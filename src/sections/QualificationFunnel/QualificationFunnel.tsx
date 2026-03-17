import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function QualificationFunnel() {
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
    <section className="bg-concrete text-carbon-dark py-24 md:py-32 px-4 relative z-10 border-b-4 border-black">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter mb-4">
            CONFIDENTIAL DATA ROOM
          </h2>
          <p className="font-body text-lg font-medium text-carbon max-w-xl mx-auto">
            Accès sécurisé réservé aux partenaires financiers et institutionnels.
          </p>
        </div>

        {/* Industrial Terminal UI */}
        <div className="bg-carbon border-4 border-black shadow-[12px_12px_0px_#111111] p-8 md:p-12 relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-wood to-transparent opacity-50"></div>
          
          <div className="font-mono text-concrete-light text-sm mb-12 flex justify-between border-b-2 border-carbon-dark pb-4">
            <span>TERMINAL LOG : INIT_SEQ</span>
            <span className="text-wood">STATUS: SECURE</span>
          </div>

          <div className="min-h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              
              {/* ÉTAPE 1 */}
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full text-center"
                >
                  <h3 className="font-heading font-black text-concrete text-2xl md:text-3xl uppercase tracking-wider mb-8">
                    Initialisation. <br/> <span className="text-wood">Quelle est la nature de votre démarche?</span>
                  </h3>
                  <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <button 
                      onClick={() => handleIntent('CAPITAL-RISQUE')}
                      className="bg-transparent border-2 border-concrete text-concrete hover:bg-wood hover:text-carbon hover:border-wood font-mono font-bold py-4 px-6 uppercase transition-colors"
                    >
                      Capital-Risque
                    </button>
                    <button 
                      onClick={() => handleIntent('REAL ESTATE')}
                      className="bg-transparent border-2 border-concrete text-concrete hover:bg-wood hover:text-carbon hover:border-wood font-mono font-bold py-4 px-6 uppercase transition-colors"
                    >
                      Real Estate
                    </button>
                    <button 
                      onClick={() => handleIntent('MÉDIAS')}
                      className="bg-transparent border-2 border-concrete text-concrete hover:bg-wood hover:text-carbon hover:border-wood font-mono font-bold py-4 px-6 uppercase transition-colors"
                    >
                      Médias
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ÉTAPE 2 (Conditionnelle VC) */}
              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full text-center"
                >
                  <h3 className="font-heading font-black text-concrete text-2xl md:text-3xl uppercase tracking-wider mb-8">
                    Analyse du DealFlow. <br/> <span className="text-wood">Quel est le ticket d'investissement typique de votre fonds (Série A)?</span>
                  </h3>
                  <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <button 
                      onClick={() => handleTicket('< 2M$')}
                      className="bg-transparent border-2 border-concrete text-concrete hover:bg-wood hover:text-carbon hover:border-wood font-mono font-bold py-4 px-6 uppercase transition-colors"
                    >
                      &lt; 2M$
                    </button>
                    <button 
                      onClick={() => handleTicket('2M$ - 10M$')}
                      className="bg-transparent border-2 border-concrete text-concrete hover:bg-wood hover:text-carbon hover:border-wood font-mono font-bold py-4 px-6 uppercase transition-colors"
                    >
                      2M$ - 10M$
                    </button>
                    <button 
                      onClick={() => handleTicket('> 10M$')}
                      className="bg-transparent border-2 border-concrete text-concrete hover:bg-wood hover:text-carbon hover:border-wood font-mono font-bold py-4 px-6 uppercase transition-colors"
                    >
                      &gt; 10M$
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ÉTAPE 3 (Capture) */}
              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full text-center"
                >
                  <h3 className="font-heading font-black text-concrete text-2xl md:text-3xl uppercase tracking-wider mb-8">
                    Profil vérifié. <br/> <span className="text-wood">Où devons-nous transmettre les Unit Economics et le Deck Confidentiel?</span>
                  </h3>
                  <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
                    <input 
                      type="email" 
                      placeholder="Email professionnel" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-concrete text-carbon font-mono font-bold py-4 px-6 border-4 border-black border-transparent focus:border-wood outline-none transition-colors placeholder:text-carbon-dark/50"
                    />
                    <button 
                      type="submit"
                      className="bg-wood text-carbon-dark font-heading font-black text-xl px-8 py-4 border-4 border-wood hover:bg-white hover:border-white transition-colors"
                    >
                      GÉNÉRER L'ACCÈS
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
