import React from 'react';
import DomainHero from './components/hero/DomainHero';
import PricingStandard from './components/pricing/PricingStandard';
import CTAOffer from './components/cta/CTAOffer';
import FeatureWithIconOne from './components/features/FeatureWithIconOne'

function App() {
  return (
    <div className="App">
      <DomainHero />
      <PricingStandard />
      <CTAOffer />
      <FeatureWithIconOne />
    </div>
  );
}

export default App;

