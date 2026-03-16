import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero/Hero';
import { Problem } from './sections/Problem/Problem';
import { Solution } from './sections/Solution/Solution';
import { GravityBattery } from './sections/GravityBattery/GravityBattery';
import { Experience } from './sections/Experience/Experience';
import { BusinessModel } from './sections/BusinessModel/BusinessModel';
import { Impact } from './sections/Impact/Impact';
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
      <Investors />
      <Footer />
    </div>
  );
}

export default App;

