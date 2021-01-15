import React from 'react';
import DomainHero from './components/hero/DomainHero';
import PricingStandard from './components/pricing/PricingStandard';
import CTAOffer from './components/cta/CTAOffer';
import FeatureWithIconOne from './components/features/FeatureWithIconOne';
import ProductWithImage from './components/products/ProductWithImage';
import TestimonialOne from './components/testimonials/TestimonialOne';


function App() {

  let pricingTable = [
    {
      title: 'Get your business online today',
      subtitle: '99% uptime for rock-solid performance',
      pricing: 
        {
          
        }
    }
  ]
  console.log(pricingTable);
  return (
    <div className="App">
      <DomainHero />
      <PricingStandard title={pricingTable.title} subtitle={pricingTable.subtitle} pricings={pricingTable.pricing} />
      <CTAOffer />
      <FeatureWithIconOne />
      <ProductWithImage />
      <TestimonialOne />
    </div>
  );
}

export default App;

