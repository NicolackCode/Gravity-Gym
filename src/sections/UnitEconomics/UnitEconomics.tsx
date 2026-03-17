import { motion } from 'framer-motion';

export function UnitEconomics() {
  return (
    <section id="uniteconomics" className="bg-carbon text-concrete py-24 md:py-32 px-4 relative z-10 border-b-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:justify-between md:items-end border-b-4 border-concrete pb-8">
          <div>
            <span className="inline-block px-3 py-1 bg-wood text-carbon-dark font-bold tracking-widest uppercase text-xs mb-4 border-2 border-wood">
              Modèle Financier
            </span>
            <h2 className="font-heading font-black text-4xl md:text-6xl uppercase tracking-tighter">
              UNIT ECONOMICS
            </h2>
          </div>
          <p className="font-body text-concrete-light max-w-sm mt-4 md:mt-0 font-medium text-lg">
            Un ratio LTV/CAC inatteignable par le fitness traditionnel, soutenu par la gamification écologique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <motion.div 
            className="bg-bg-panel p-6 border-4 border-concrete shadow-[6px_6px_0px_#E4E4E4] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-wood text-sm tracking-widest uppercase mb-4 border-b border-border pb-2">01 / CAPEX Matériel</span>
            <div className="mt-auto">
              <span className="block font-heading font-black text-5xl mb-2 text-concrete">315€</span>
              <span className="font-body text-concrete-light text-sm font-semibold">COÛT DE RÉTROFIT <br/> PAR POSTE</span>
            </div>
            <p className="mt-6 text-sm text-concrete-light border-t border-border pt-4">Faible risque R&D. Utilisation de micro-onduleurs réseau certifiés Enphase.</p>
          </motion.div>

          <motion.div 
            className="bg-bg-panel p-6 border-4 border-concrete shadow-[6px_6px_0px_#E4E4E4] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="font-mono text-wood text-sm tracking-widest uppercase mb-4 border-b border-border pb-2">02 / OPEX Réseau</span>
            <div className="mt-auto">
              <span className="block font-heading font-black text-5xl mb-2 text-energy">- 18%</span>
              <span className="font-body text-concrete-light text-sm font-semibold">RÉDUCTION DE CONSOMMATION <br/>(BOUCLIER TERTIAIRE)</span>
            </div>
            <p className="mt-6 text-sm text-concrete-light border-t border-border pt-4">L'autoconsommation de 250 W/h par session compense la charge thermique en pic d'affluence.</p>
          </motion.div>

          <motion.div 
            className="bg-bg-panel p-6 border-4 border-concrete shadow-[6px_6px_0px_#E4E4E4] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="font-mono text-wood text-sm tracking-widest uppercase mb-4 border-b border-border pb-2">03 / ARPU & Pricing</span>
            <div className="mt-auto">
              <span className="block font-heading font-black text-4xl mb-2 text-concrete">PREMIUM</span>
              <span className="font-body text-concrete-light text-sm font-semibold">WILLINGNESS TO PAY (WTP) <br/>+ VALEUR D'ACCÈS</span>
            </div>
            <p className="mt-6 text-sm text-concrete-light border-t border-border pt-4">La Gen Z et les Millennials démontrent un WTP 65% supérieur pour le sport à impact garanti.</p>
          </motion.div>

          <motion.div 
            className="bg-wood p-6 border-4 border-concrete shadow-[6px_6px_0px_#E4E4E4] flex flex-col text-carbon-dark"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="font-mono text-carbon-dark text-sm tracking-widest uppercase mb-4 border-b border-carbon/20 pb-2 font-bold">04 / LTV / CAC</span>
            <div className="mt-auto">
              <span className="block font-heading font-black text-5xl mb-2">&gt; 3:1</span>
              <span className="font-body text-carbon text-sm font-bold">MÉTRIQUE SAAS <br/>APPLIQUÉE AU RETAIL</span>
            </div>
            <p className="mt-6 text-sm text-carbon border-t border-carbon/20 pt-4 font-semibold">Acquisition abaissée par la viralité organique. Rétention maximisée par la gamification sociale de l'effort.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
