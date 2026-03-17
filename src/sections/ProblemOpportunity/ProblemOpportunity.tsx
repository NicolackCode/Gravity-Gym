import { motion } from 'framer-motion';
import { Flame, Activity } from 'lucide-react';

export function ProblemOpportunity() {
  return (
    <section id="problemopportunity" className="bg-concrete text-carbon-dark py-24 md:py-32 px-4 border-b-4 border-black border-t-4 relative z-10 mt-16 md:mt-0">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <motion.h2 
            className="font-heading font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            LES SALLES DE SPORT <span className="text-red-600">CONSOMMENT.</span>
            <br />
            NOUS <span className="text-energy">FOURNISSONS.</span>
          </motion.h2>
          <motion.div 
            className="w-full h-2 bg-black mt-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* L'Inefficacité (Gauche) */}
          <motion.div 
            className="bg-carbon text-concrete p-8 md:p-12 border-4 border-black shadow-[8px_8px_0px_#111111]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-red-600/10 border-2 border-red-600 text-red-600">
                <Flame size={32} />
              </div>
              <h3 className="font-heading font-black text-3xl uppercase tracking-tight">Le Gouffre</h3>
            </div>
            
            <p className="font-body text-lg mb-8 text-concrete-light">
              Un club de fitness premium de 500 m² consomme en moyenne <strong>120 MWh/an</strong>. Entre la charge thermique de la climatisation et l'énergie fantôme des écrans, les salles traditionnelles sont des gouffres financiers et climatiques.
            </p>

            <ul className="space-y-4 font-body font-semibold text-lg">
              <li className="flex items-center gap-3 border-b border-border pb-4">
                <span className="text-red-500 font-mono text-xl">X</span>
                Explosion des coûts opérationnels (OPEX)
              </li>
              <li className="flex items-center gap-3 border-b border-border pb-4">
                <span className="text-red-500 font-mono text-xl">X</span>
                Greenwashing marketing inefficace
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-500 font-mono text-xl">X</span>
                Vulnérabilité aux prix de l'énergie
              </li>
            </ul>
          </motion.div>

          {/* L'Opportunité (Droite) */}
          <motion.div 
            className="bg-energy text-concrete p-8 md:p-12 border-4 border-black shadow-[8px_8px_0px_#111111]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-black border-2 border-black text-energy">
                <Activity size={32} />
              </div>
              <h3 className="font-heading font-black text-3xl uppercase tracking-tight text-carbon-dark">L'Arbitrage</h3>
            </div>
            
            <p className="font-body text-lg mb-8 font-medium text-carbon max-w-md">
              Transformer la dépense métabolique en actif financier. L'effort continu d'un parc de 40 machines rétrofittées compense de manière autonome et prévisible les besoins structurels de pointe.
            </p>

            <ul className="space-y-4 font-body font-bold text-carbon text-lg">
              <li className="flex items-center gap-3 border-b border-carbon/20 pb-4">
                <span className="text-black font-mono text-xl">+</span>
                Jusqu'à 18% des besoins électriques effacés
              </li>
              <li className="flex items-center gap-3 border-b border-carbon/20 pb-4">
                <span className="text-black font-mono text-xl">+</span>
                Monétisation de l'énergie cinétique via micro-onduleurs
              </li>
              <li className="flex items-center gap-3">
                <span className="text-black font-mono text-xl">+</span>
                Bouclier contre les Réglementations (Décret Tertiaire)
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
