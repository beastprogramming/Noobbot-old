import React from 'react';

import DomainHero from '../components/hero/DomainHero';
import HeadingStandard from '../components/headings/headingStandard';
import PricingStandard from '../components/pricing/PricingStandard';
import CTAOffer from '../components/cta/CTAOffer';
import FeatureWithIconOne from '../components/features/FeatureWithIconOne';
import ProductWithImage from '../components/products/ProductWithImage';
import TestimonialOne from '../components/testimonials/TestimonialOne';

function Home() {
    let pricingTable = 
        {
          title: 'Get your business online today',
          subtitle: '99% uptime for rock-solid performance',
        }
     let pricings =  [
        {
          title: 'Shared Hosting',
          subtitle: 'WHMCS Free',
          features:[
              {text:"99.9% Uptime"},
              {text:"99.9% Uptime"},
              {text:"99.9% Uptime"}
            ],
            priceText: "Starting from",
            price: "120",
            path:"#"
        }
      ]
      return (
        <>
          <DomainHero />
          <HeadingStandard title={pricingTable.title} subtitle={pricingTable.subtitle}/>
          <PricingStandard pricings={pricings} />
          <CTAOffer />
          <FeatureWithIconOne />
          <ProductWithImage />
          <TestimonialOne />
       </>
      );
}

export default Home;