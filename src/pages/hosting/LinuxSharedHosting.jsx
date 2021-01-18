import React from "react";

import PageHeader from "../../components/hero/PageHeroOne";
import DomainCTA from "../../components/cta/DomainRegisterCTA";
import PricingTabs from "../../components/tabs/pricingTabs";
import ProductFeatureImage from "../../components/features/ProductFeatureImage";
import FeatureIncluded from "../../components/features/FeatureWithIconTwo";
import FeatureList from "../../components/features/FeaturesList";
import PricingStandard from "../../components/pricing/PricingStandard";
import RelatedPricing from "../../components/pricing/RelatedProducts";
import Faq from "../../components/faq/FaqOne";

function LinuxSharedHosting() {
  let pricingLists = [
    {
      icon: "/images/flag/ind.svg",
      iconAlt: "India Flag",
      text: "India",
    },
    {
      icon: "/images/flag/usa.svg",
      iconAlt: "USA Flag",
      text: "USA (Texas)",
    },
    {
      icon: "/images/flag/uk.svg",
      iconAlt: "UK Flag",
      text: "United Kingdom",
    },
    {
      icon: "/images/flag/hk.svg",
      iconAlt: "Hong Kong Flag",
      text: "Hong Kong",
    },
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
  let pricingsTableTab3 = [
    {
      title: "SDH-UK",
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
  let featureIncluded = [
    {
      icon: "/images/icons/fast-website.svg",
      title: "Lightning Fast Website",
      description:
        "Our web application accelerator, powered by Varnish Cache, ensures the maximum performance of your website at all times!",
    },
    {
      icon: "/images/icons/email.svg",
      title: "Email included",
      description:
        "Advanced email management features in cPanel allow you manage your emails, mailing lists and more without any hassles.",
    },
    {
      icon: "/images/icons/control-panel.svg",
      title: "cPanel for Management",
      description:
        "cPanel, an intuitive and powerful control panel, is available on all plans which makes your hosting package management a breeze!",
    },
  ];
  let featureLists = [
    {
      title: "State-of-the-Art Servers",
      lists: [
        {
          title: "Dual Intel Xeon Processor E5-2630",
        },
        {
          title: "64 GB RAM",
        },
        {
          title: "256 GB SSD in RAID 1",
        },
        {
          title: "Octa Core with 2.40 GHz",
        },
        {
          title: "2 TB SATA in RAID 1",
        },
      ],
    },
    {
      title: "Program in Any Language",
      lists: [
        {
          title: "PHP 7.3/7.4, Perl, Python, RoR, GD, cURL, CGI, mcrypt3",
        },
        {
          title: "Apache 2.4x",
        },
        {
          title: "MySQL 5",
        },
        {
          title: "Ruby On Rails",
        },
        {
          title: "Zend Optimizer, Zend Engine, ionCube Loader",
        },
      ],
    },
    {
      title: "Top-Notch Security",
      lists: [
        {
          title: "Anti Spam & Virus Protection",
        },
        {
          title: "Password Protect Directories",
        },
        {
          title: "Secure FTP Access",
        },
        {
          title: "IP Blocking",
        },
        {
          title: "phpMyAdmin Access",
        },
        {
          title: "Hotlink & Leech Protection",
        },
        {
          title: "Cron Jobs for Scheduled Tasks",
        },
        {
          title: "Customizable Error Page",
        },
        {
          title: "Website Statistics with AWstats",
        },
      ],
    },
  ];
  let featureScriptInstaller = [
    {
      title: "WordPress, Joomla, Drupal",
      description:
        "It only takes a moment for WordPress or another content management system to be ready on your hosting. This makes website development very easy.",
    },
    {
      title: "Galleries, forums and CRM systems",
      description:
        "Thanks to the autoinstaller, you can quickly launch more advanced tools, such as CRM systems, online training portals, forums and galleries.",
    },
  ];
  let relatedProducts = [
    {
      bannerImage:
        "https://home.pl/img/cms/f0ab6787-f1dd-47e0-b621-313323796ad4/office-365-business-medium.jpg",
      icon:
        "https://home.pl/img/cms/75d8d722-fdca-4446-b08b-0c2d73d24885/office-365-logo-fluent-design.png",
      title: "Google Workspace Business Standard",
      subTitle: "Dawniej G Suite Business - aplikacje biurowe od Google",
      price: "800",
      uom: "per month",
      path: "#",
    },
  ];
  let faqs = [
    {
      question: "What is Shared Web hosting?",
      answer:
        "In Shared Web Hosting, multiple clients are hosted on a single server i.e. the clients share the server's resources. This helps reduce the cost, since the cost of the server and its resources are spread over all the clients/packages hosted on the server. Shared Hosting is perfect for personal websites, small and mid-sized businesses that do not require all the resources of a server.",
    },
    {
      question: "Can I host multiple Web sites within one Shared Hosting plan?",
      answer:
        "Yes! Our Pro and Business shared hosting plans allow you to host more than one Website, by adding secondary domains through your hosting control panel i.e. cPanel.",
    },
    {
      question: "Is there a Money Back Guarantee?",
      answer: "Yes, we offer a 100% Risk Free, 30 day Money Back Guarantee.",
    },
    {
      question: "Is Email hosting included in my package?",
      answer:
        "Yes, all our Hosting packages come with Unlimited Email Hosting.",
    },
    {
      question: "Can I upgrade to a higher plan?",
      answer:
        "Yes, you can easily upgrade to one of our higher plans at any time.",
    },
    {
      question: "Is my data safe? Do you take backups?",
      answer: "Yes, your data is a 100% secure and is backed-up every 5 days.",
    },
    {
      question: "Do you include protection from viruses?",
      answer: "Yes, all our servers are protected by Clam AV.",
    },
    {
      question: "Can I divide my Shared Hosting package and resell it?",
      answer:
        'While a Shared Hosting package cannot be used for this purpose, you can easily resell custom packages with our Reseller Hosting. To view our Reseller Hosting plans, <a href="#">click here.</a>',
    },
    {
      question: "Do you offer SSH access?",
      answer:
        "Yes, we provide SSH access to your domain. Because this is a shared environment, you will not get root access. However, you will be able to achieve most of your requirements by having the rights to access only the files relevant to your domain.",
    },
    {
      question: "Who do I get in touch with if I need help?",
      answer:
        'Our Support team is always at hand to assist you. You can take a look at all our contact details <a href="#">here</a> .',
    },
  ];
  return (
    <>
      <PageHeader 
      title={"Shared Hosting - At it's Simplest Best"}
      mark= {"Get your Business Online in an Affordable way"}
      description={"Perfect for a Basic Website or A Complex Ecommerce Website. It is power-packed with features and versatile on applications"}
      buttonPath = { "#plans"}
      buttonText = { "View Plans"}
      image = { "/images/pages/Linux Shared Hosting.png" }
      alt = { "Noobbot Shared Hosting"}
      />
      <DomainCTA />
      <PricingTabs tabLists={pricingLists} tabContents={tabPricing} >
        <PricingStandard pricings={pricingsTableTab1} />
        <PricingStandard pricings={pricingsTableTab2} />
        <PricingStandard pricings={pricingsTableTab3} />
      </PricingTabs>
      <FeatureIncluded
        title="Just what you need for a Basic Web Presence"
        features={featureIncluded}
      />
      <ProductFeatureImage
        order={"right"}
        title={"One click to start building your website"}
        image={"https://home.pl/img/home/base/pages/hosting/cms.png"}
        path={"#"}
        pathTitle={"Find out more"}
        features={featureScriptInstaller}
      />
      <FeatureList title={"Under the hood"} features={featureLists} />
      <Faq faqs={faqs} />
      <RelatedPricing products={relatedProducts} />
    </>
  );
}
export default LinuxSharedHosting;
