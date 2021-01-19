import React from "react";

import PageHeader from "../../components/hero/PageHeroOne";
import DomainCTA from "../../components/cta/DomainRegisterCTA";
import PricingTabs from "../../components/tabs/pricingTabs";
import PricingStandard from "../../components/pricing/PricingStandard";
import FeatureIncluded from "../../components/features/FeatureWithIconTwo";
import WordPressFeatureLists from "../../components/features/FeatureWithImageAndLists";
import Faq from "../../components/faq/FaqOne";


let featureIncluded = [
  {
    icon: "/images/icons/setup.svg",
    title: "Auto-Setup",
    description:
      "No need for any legwork - Your WordPress hosting comes pre-configured with the latest version of WordPress and is ready-to-use the moment you buy it.",
  },
  {
    icon: "/images/icons/update.svg",
    title: "Auto-Updates",
    description:
      "Any patches or version upgrades released by WordPress are automatically installed for your packages, not only making your sites future-proof but also more secure.",
  },
  {
    icon: "/images/icons/caching.svg",
    title: "Auto-Caching",
    description:
      "Get the best-performing WordPress sites with our Cloud Hosting. With cache and CDN auto-configured on all your packages, pages load much faster with the least amount of resources",
  },
  {
    icon: "/images/icons/backup.svg",
    title: "Auto-Backups",
    description:
      "Get a time machine for all your WordPress sites. With CodeGuard automatically set up for any site you create, your data is always protected and regularly backed up.",
  },
  {
    icon: "/images/icons/secure.svg",
    title: "Auto-Secured",
    description:
      "No need to worry about viruses or hacking attempts. All your WordPress sites will be regularly scanned for malware with SiteLock's advanced security tools.",
  },
];
let pricingLists = [
  {
    icon: "/images/icons/wordpress.svg",
    iconAlt: "WordPress Hosting",
    text: "WordPress Hosting",
  },
  {
    icon: "/images/icons/security.svg",
    iconAlt: "WordPress Hosting + Security Suite",
    text: "WordPress Hosting + Security Suite",
  }
];
let tabPricing = [
  {
    title: "Best suited for visitors from India, South & Central Asia",
  },
  {
    title: "Best suited for visitors from US & world over",
  },
  {
    title: "Best suited for visitors from Europe",
  },
  {
    title: "Best suited for visitors from China & East Asia",
  },
];
let pricingsTableTab1 = [
  {
    title: "Starter Lite",
    subtitle: "Free SSL",
    features: [
      { text: "99.9% Uptime" },
      { text: "99.9% Uptime" },
      { text: "99.9% Uptime" },
    ],
    priceText: "Starting from",
    price: "120",
    path: "#",
  },
];
let pricingsTableTab2 = [
  {
    title: "SDH-USA",
    subtitle: "Free SSL",
    features: [
      { text: "99.9% Uptime" },
      { text: "99.9% Uptime" },
      { text: "99.9% Uptime" },
    ],
    priceText: "Starting from",
    price: "120",
    path: "#",
  },
];
let wordPressFeatureLists = [{
  title:"WordPress powers 27% of websites on the Internet",
  description:"Build anything - a blog, a static website or an ecommerce shop",
  features: [
    {
    title:"Ready-made Themes",
    description:"Choose from over 25,000+ themes available for any type of business, portfolio, or blog.",
    icon:"/images/icons/themes.svg",
    alt:""
  },
  {
    title:"SEO-friendly",
    description:"With pre-integrated SEO friendly module, drive maximum traffic to your site through search engines.",
    icon:"/images/icons/seo.svg",
    alt:""
  },
  {
    title:"Diversified Plugins",
    description:"Add features to your websites by installing plugins in a few clicks.",
    icon:"/images/icons/plugins.svg",
    alt:""
  },
  {
    title:"Mobile Compatible",
    description:"Create and even edit your site on any mobile device seamlessly.",
    icon:"/images/icons/mobile-compatible.svg",
    alt:""
  }
]
}];

let faqs = [
  {
    question: "Can I upgrade my WordPress Hosting plan?",
    answer:
      "No, You cannot change upgrade or downgrade plans, however the amount of RAM and CPU cores for your plan can be upgraded.",
  },
  {
    question: "Can I add more WordPress installations to an existing plan?",
    answer:
      "No, you cannot add more WordPress installations to any plan. The number of WordPress installations will remain fixed.",
  },
  {
    question: "Can SiteLock and CodeGuard packages be upgraded?",
    answer: "Currently, the included SiteLock and CodeGuard plans cannot be upgraded.",
  },
  {
    question: "Can I use an external email service with WordPress Hosting?",
    answer:
      "Yes, you can use any 3rd party email service for your domain. In case you are using the default name servers provided with WordPress Hosting, please contact our Support team to update the relevant DNS records for your blog.",
  },
  {
    question: "Can I use an existing certificate with my blog?",
    answer:
      "No, you cannot use an existing certificate. You will need to generate a CSR from the WordPress Hosting panel and get a certificate issued which can be installed from the panel.",
  },
  {
    question: "Will WordPress be updated automatically?",
    answer: "Yes, WordPress core updates will be enabled by default.",
  },
  {
    question: "Is there a money back period for WordPress Hosting?",
    answer: "No, WordPress Hosting does not have a money back period.",
  },
  {
    question: "Is Multisite supported with WordPress Hosting?",
    answer:
      'No, Multisite is not supported.',
  },
  {
    question: "Can I access the cPanel for my hosting plan?",
    answer:
      "No, cPanel access is not provided with WordPress Hosting.",
  },
  {
    question: "Is an SSL Certificate included with the plan?",
    answer:
      'Yes. When you purchase a WordPress Hosting order, Free SSL powered by Let\'s Encrypt, is automatically generated and installed for all domains associated with the package',
  },
  {
    question: 'What is the difference between "WordPress Hosting" and "WordPress Hosting + Security Suite" plans?',
    answer:
      "WordPress Hosting plans are economical plans without automatic backups and anti-malware. WordPress Hosting + Security plans have the same specifications as that of the WordPress hosting plans, including automatic cloud backups and anti-malware at a cost difference.",
  }
];

function WordpressHosting() {
  return (
    <>
      <PageHeader
        title={"WordPress powered by Noobbot Cloud Hosting"}
        mark={"Free SSL Certificate"}
        description={
          "A secure, reliable and powerful platform crafted for WordPress"
        }
        buttonPath={"#plans"}
        buttonText={"View Plans"}
        image={"/images/pages/WordPress Hosting.png"}
        alt={"Noobbot WordPress Hosting"}
      />
      <DomainCTA />
      <PricingTabs tabLists={pricingLists} tabContents={tabPricing}>
        <PricingStandard pricings={pricingsTableTab1} />
        <PricingStandard pricings={pricingsTableTab2} />
      </PricingTabs>
      <FeatureIncluded
        title="It just works Auto-magically"
        features={featureIncluded}
      />
      <WordPressFeatureLists title={wordPressFeatureLists[0].title} description={wordPressFeatureLists[0].description} features={wordPressFeatureLists[0].features}/>
      <Faq faqs={faqs} />

    </>
  );
}
export default WordpressHosting;
