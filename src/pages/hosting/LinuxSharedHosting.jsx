import React from "react";

import PageHeader from "../../components/hero/PageHeroOne";
import DomainCTA from "../../components/cta/DomainRegisterCTA";
import PricingTabs from "../../components/tabs/pricingTabs";
import PricingStandard from '../../components/pricing/PricingStandard';
import ProductFeatureImage from "../../components/features/ProductFeatureImage";
import RelatedPricing from "../../components/pricing/RelatedProducts";
import Faq from "../../components/faq/FaqOne";

function LinuxSharedHosting() {
  let pricingLists = [
    {
    icon:"/images/flag/ind.svg",
    iconAlt:"India Flag",
    text:"India"
  },
    {
    icon:"/images/flag/usa.svg",
    iconAlt:"USA Flag",
    text:"USA (Texas)"
  },
    {
    icon:"/images/flag/uk.svg",
    iconAlt:"UK Flag",
    text:"United Kingdom"
  },
    {
    icon:"/images/flag/hk.svg",
    iconAlt:"Hong Kong Flag",
    text:"Hong Kong"
  }
];
let tabPricing = [{
  title: "Best suited for visitors from India, South & Central Asia"
},
{
  title: "Best suited for visitors from US & world over"
},
{
  title: "Best suited for visitors from Europe"
},
{
  title: "Best suited for visitors from China & East Asia"
}];
let pricingsTable =  [
  {
    title: 'Shared Hosting',
    subtitle: 'Free SSL',
    features:[
        {text:"99.9% Uptime"},
        {text:"99.9% Uptime"},
        {text:"99.9% Uptime"}
      ],
      priceText: "Starting from",
      price: "120",
      path:"#"
  },
  {
    title: 'Reseller Hosting',
    subtitle: 'WHMCS Free',
    features:[
        {text:"99.9% Uptime"},
        {text:"99.9% Uptime"},
        {text:"99.9% Uptime"}
      ],
      priceText: "Starting from",
      price: "212",
      path:"#"
  }
]
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
  let relatedProducts = [
    {
      bannerImage: "https://home.pl/img/cms/f0ab6787-f1dd-47e0-b621-313323796ad4/office-365-business-medium.jpg",
      icon: "https://home.pl/img/cms/75d8d722-fdca-4446-b08b-0c2d73d24885/office-365-logo-fluent-design.png",
      title: "Google Workspace Business Standard",
      subTitle: "Dawniej G Suite Business - aplikacje biurowe od Google",
      price: "800",
      uom: "per month",
      path: "#",
    },
  ];
  let faqs = [
      {
          question:"What is Shared Web hosting?",
          answer:"In Shared Web Hosting, multiple clients are hosted on a single server i.e. the clients share the server's resources. This helps reduce the cost, since the cost of the server and its resources are spread over all the clients/packages hosted on the server. Shared Hosting is perfect for personal websites, small and mid-sized businesses that do not require all the resources of a server."
      },
      {
          question:"Can I host multiple Web sites within one Shared Hosting plan?",
          answer:"Yes! Our Pro and Business shared hosting plans allow you to host more than one Website, by adding secondary domains through your hosting control panel i.e. cPanel."
      },
      {
          question:"Is there a Money Back Guarantee?",
          answer:"Yes, we offer a 100% Risk Free, 30 day Money Back Guarantee."
      },
      {
          question:"Is Email hosting included in my package?",
          answer:"Yes, all our Hosting packages come with Unlimited Email Hosting."
      },
      {
          question:"Can I upgrade to a higher plan?",
          answer:"Yes, you can easily upgrade to one of our higher plans at any time."
      },
      {
          question:"Is my data safe? Do you take backups?",
          answer:"Yes, your data is a 100% secure and is backed-up every 5 days."
      },
      {
          question:"Do you include protection from viruses?",
          answer:"Yes, all our servers are protected by Clam AV."
      },
      {
          question:"Can I divide my Shared Hosting package and resell it?",
          answer:'While a Shared Hosting package cannot be used for this purpose, you can easily resell custom packages with our Reseller Hosting. To view our Reseller Hosting plans, <a href="#">click here.</a>'
      },
      {
          question:"Do you offer SSH access?",
          answer:"Yes, we provide SSH access to your domain. Because this is a shared environment, you will not get root access. However, you will be able to achieve most of your requirements by having the rights to access only the files relevant to your domain."
      },
      {
          question:"Who do I get in touch with if I need help?",
          answer:'Our Support team is always at hand to assist you. You can take a look at all our contact details <a href="#">here</a> .'
      }
  ];
  return (
    <>
      <PageHeader />
      <DomainCTA />
      <PricingTabs tabLists={pricingLists} tabContents={tabPricing}>
        <div><PricingStandard pricings={pricingsTable}/></div>
        <div><PricingStandard pricings={pricingsTable}/></div>
        <div><PricingStandard pricings={pricingsTable}/></div>
      </PricingTabs>

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

      <Faq faqs={faqs} />
      <RelatedPricing products={relatedProducts} />
    </>
  );
}
export default LinuxSharedHosting;
