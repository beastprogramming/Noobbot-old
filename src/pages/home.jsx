import React from 'react';

import DomainHero from '../components/hero/DomainHero';
import HeadingStandard from '../components/headings/headingStandard';
import PricingStandard from '../components/pricing/PricingStandard';
import CTAOffer from '../components/cta/CTAOffer';
import ProductFeatureImage from "../components/features/ProductFeatureImage";
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
      ];
      let feature1 = [
        {
          title: "Your private virtual server",
          description:
            "If traditional shared hosting isn't enough for you, choose a VPS server. As part of Cloud VPS, you will receive specific server resources: the power of even several processor cores (up to 8vCore), up to 16 GB of RAM and up to 150 GB on NVMe SSD disks. As standard, you will have root access to the Linux shell, which will allow you to manage the server configuration, install your own applications and libraries, and administer user accounts.",
        },
        {
          title: "Tailored to your needs",
          description:
            "Is your project growing fast? If necessary, you can easily change your VPS package in the administration panel - just a few clicks.",
        },
      ];
      let feature2 = [
        {
          title: "Maximum performance within your reach",
          description:
            "Need power without compromise? Choose a dedicated server available immediately, which will give you independence and freedom in action. A dedicated server offers the performance of a physical machine that you have at your sole disposal. You configure it and manage its operation entirely in your own way. You will find here various types of dedicated servers tailored to the needs of the most demanding customers. All available servers are equipped with fast SSD or HDD disks and have unlimited and free transfer.",
        },
        {
          title: "Designed for professionals",
          description:
            "A dedicated server is an excellent choice for medium and large projects, when you need full control over the entire platform, the highest speed and complete security.",
        },
      ];
      let feature3 = [
        {
          title: "WordPress, Joomla, Drupal",
          description:
            "It only takes a moment for WordPress or another content management system to be ready on your hosting. This makes website development very easy.",
        },
        {
          title: "Galleries, forums and CRM systems",
          description:
            "Thanks to the autoinstaller, you can quickly launch more advanced tools, such as CRM systems, online training portals, forums and galleries.",
        }
      ];
      return (
        <>
          <DomainHero />
          <HeadingStandard title={pricingTable.title} subtitle={pricingTable.subtitle}/>
          <PricingStandard pricings={pricings} />
          <CTAOffer />
          <FeatureWithIconOne />
          <ProductFeatureImage
        order={"right"}
        title={"Linux KVM VPS"}
        image={"https://home.pl/img/home/base/pages/serwery/servers-servers.png"}
        path={"#"}
        pathTitle={"View Linux KVM VPS"}
        features={feature1}
      />

      <ProductFeatureImage
        order={"left"}
        title={"Dedicated server"}
        image={"https://home.pl/img/home/base/pages/serwery/servers-cloud.png"}
        path={"#"}
        pathTitle={"View Dedicated Servers"}
        features={feature2}
      />

      <ProductFeatureImage
        order={"right"}
        title={"One click to start building your website"}
        image={"https://home.pl/img/home/base/pages/hosting/cms.png"}
        path={"#"}
        pathTitle={"Find out more"}
        features={feature3}
      />
          <ProductWithImage />
          <TestimonialOne />
       </>
      );
}

export default Home;