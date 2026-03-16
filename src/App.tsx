import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero/Hero';
import { Problem } from './sections/Problem/Problem';
import { Solution } from './sections/Solution/Solution';
import { GravityBattery } from './sections/GravityBattery/GravityBattery';
import { Experience } from './sections/Experience/Experience';
import { BusinessModel } from './sections/BusinessModel/BusinessModel';
import { Impact } from './sections/Impact/Impact';
import { MaterialArchitectureBOM } from './sections/B2B/MaterialArchitectureBOM';
import { GovernanceCompliance } from './sections/B2B/GovernanceCompliance';
import { Investors } from './sections/Investors/Investors';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <GravityBattery />
      <Experience />
      <BusinessModel />
      <Impact />
      <MaterialArchitectureBOM />
      <GovernanceCompliance />
      <Investors />
      <Footer />
    </div>
  );
}

export default App;

