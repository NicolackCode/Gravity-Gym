import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero/Hero';
import { ProblemOpportunity } from './sections/ProblemOpportunity/ProblemOpportunity';
import { UnitEconomics } from './sections/UnitEconomics/UnitEconomics';
import { TechnologicalMoat } from './sections/TechnologicalMoat/TechnologicalMoat';
import { MaterialArchitectureBOM } from './sections/B2B/MaterialArchitectureBOM';
import { GovernanceCompliance } from './sections/B2B/GovernanceCompliance';
import { QualificationFunnel } from './sections/QualificationFunnel/QualificationFunnel';
import { SplashGate } from './components/layout/SplashGate';
import { GymArchitecture } from './sections/GymArchitecture/GymArchitecture';
import { useAudience } from './context/AudienceContext';

function App() {
  const { audience } = useAudience();

  if (!audience) {
    return <SplashGate />;
  }

  return (
    <div className="app-container bg-carbon">
      <Navbar />
      <Hero />
      <ProblemOpportunity />
      
      {audience === 'B2B' ? (
        <>
          <UnitEconomics />
          <TechnologicalMoat />
          <GymArchitecture />
          <MaterialArchitectureBOM />
          <GovernanceCompliance />
        </>
      ) : (
        <>
          <GymArchitecture />
        </>
      )}

      <QualificationFunnel />
      <Footer />
    </div>
  );
}

export default App;
