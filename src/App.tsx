import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero/Hero';
import { ProblemOpportunity } from './sections/ProblemOpportunity/ProblemOpportunity';
import { UnitEconomics } from './sections/UnitEconomics/UnitEconomics';
import { TechnologicalMoat } from './sections/TechnologicalMoat/TechnologicalMoat';
import { MaterialArchitectureBOM } from './sections/B2B/MaterialArchitectureBOM';
import { GovernanceCompliance } from './sections/B2B/GovernanceCompliance';
import { QualificationFunnel } from './sections/QualificationFunnel/QualificationFunnel';

function App() {
  return (
    <div className="app-container bg-carbon">
      <Navbar />
      <Hero />
      <ProblemOpportunity />
      <UnitEconomics />
      <TechnologicalMoat />
      <MaterialArchitectureBOM />
      <GovernanceCompliance />
      <QualificationFunnel />
      <Footer />
    </div>
  );
}

export default App;
