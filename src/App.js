import React from 'react';
import DomainHero from './components/hero/DomainHero';
import PricingStandard from './components/pricing/PricingStandard';
import CTAOffer from './components/cta/CTAOffer';
import FeatureWithIconOne from './components/features/FeatureWithIconOne';
import ProductWithImage from './components/products/ProductWithImage';
import TestimonialOne from './components/testimonials/TestimonialOne';


function App() {
  return (
    <div className="App">
      <DomainHero />
      <PricingStandard />
      <CTAOffer />
      <FeatureWithIconOne />
      <ProductWithImage />
      <TestimonialOne />
    </div>
  );
}

export default App;

