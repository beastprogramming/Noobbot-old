import React from "react";

import PageHeader from "../../components/hero/PageHeroOne";
import DomainCTA from "../../components/cta/DomainRegisterCTA";
import PricingTabs from "../../components/tabs/pricingTabs";
import PricingStandard from "../../components/pricing/PricingStandard";
import FeatureIncluded from "../../components/features/FeatureWithIconTwo";

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
    title: "SDH-India",
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
    </>
  );
}
export default WordpressHosting;
