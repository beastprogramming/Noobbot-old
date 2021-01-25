import React from "react";
import PageHeader from "../../components/hero/PageHeroOne";
import DomainCTA from "../../components/cta/DomainRegisterCTA";
import PricingTabs from "../../components/tabs/pricingTabs";
import PricingStandard from "../../components/pricing/PricingStandard";
import WhyNoobbotForDomain from '../../components/features/FeatureTextOne';
import Faq from "../../components/faq/FaqOne";
import RelatedPricing from "../../components/pricing/RelatedProducts";

function CloudHosting() {
  let pricingLists = [
    {
      icon: "/images/flag/ind.svg",
      iconAlt: "IN Hosting",
      text: "IN",
    },
    {
      icon: "/images/flag/uk.svg",
      iconAlt: "UK Hosting",
      text: "UK",
    },
  ];
  let tabPricing = [
    {
      title: "Best suited for visitors from India, South & Central Asia",
    },
    {
      title: "Best suited for visitors from UK & world over",
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
  let faqs = [
    {
      question: "What is reseller hosting?",
      answer:
        "Reseller Hosting allows you to create sub-packages within the allotted Disk Space and Bandwidth of your main Hosting package. You can use your Reseller Plesk panel to create Individual Custom packages (each with plesk) and provision them to your Customers. Additionally, you can use WHMCS for billing (Not supported on the base plan).",
    },
    {
      question:
        "Which Control Panels do I get with a Reseller Hosting package?",
      answer:
        "All Reseller Hosting packages come with Parallels Plesk. Plesk gives you administrative control of your Reseller Hosting package and allows your Customers to manage their individual Hosting packages, throught their Customer Plesk panel.",
    },
    {
      question: "How can I create Sub-Packages and manage them?",
      answer:
        "Your Reseller Plesk Control Panel allows you to create individual Hosting packages and completely manage them.",
    },
    {
      question: "What is WHMCS and do I get WHMCS with your Reseller Hosting?",
      answer:
        "WHMCS is a popular Billing platform used by a majority of Web Hosts. Yes, we do provide a free WHMCS license for all plans except the starter plan.",
    },
    {
      question: "How can my Customers manage their Individual Packages?",
      answer:
        "Your Customers will be able to manage their own packages using cPanel.",
    },
    {
      question: "What are the advantages of reseller hosting?",
      answer:
        "If you're a Web Designer/Developer you can host and manage all your websites/clients with one Reseller Hosting package instead of going through the hassle of managing multiple shared Hosting packages. This also lowers your Web Hosting costs significantly. Additionally, you can resell hosting as a value added feature to your existing business or as a separate entity.",
    },
    {
      question: "Can I upgrade between plans?",
      answer:
        "Yes, you can upgrade your existing plan to a higher plan at any time.",
    },
    {
      question: "Is there a money back guarantee?",
      answer: "Yes, we offer a 100% Risk Free, 30 Day Money Back Guarantee.",
    },
    {
      question: "Do your Reseller Hosting plans include a One-Click Installer?",
      answer:
        "Yes, all our Reseller Hosting plans come integrated with Softaculous - a popular and easy to use One-Click Installer.",
    },
    {
      question: "How is technical support handled?",
      answer:
        "We have a fully qualified Support team at hand to assist you. You can take a look at all our contact details here. However, we do not offer Support to your Customers directly.",
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

  let whyFeatures = [
    {
        title: "What Does Cloud Hosting mean for your Website?",
        subTitle: "Next-level Performance and Reliability with Simplified Management",
        features: [
            {
                title: "Blazing-Fast Load Time",
                description: "With full SSD storage, highly optimized servers, and state of the art NGINX caching, host websites at best-in-class speeds.",
                image:"/images/icons/fast.svg"
            },
            {
                title: "Instant Scaling",
                description: "No need to move your hosting as your traffic grows. Ramp up your resources at the click of a button - instantly add RAM and CPU without a reboot",
                image:"/images/icons/scaling.svg"
            },
            {
                title: "cPanel for Management",
                description: "Just like Shared Hosting - manage your website and associated services like Email and sub-domains with the simplicity and ease of cPanel.",
                image:"/images/icons/interface.svg"
            },
            {
                title: "Fully managed servers",
                description: "Server management, patches and bug fixes are handled by our experts to ensure you can focus on building and running your website.",
                image:"/images/icons/managed.svg"
            },
            {
                title: "Quick Setup",
                description: "You can use your Cloud Hosting package from the moment you have completed your purchase - no delays, no elaborate setups!",
                image:"/images/icons/setup.svg"
            },
            {
                title: "1-click Application installer",
                description: "Choose between 100+ applications and CMSes to quickly start setting up your website.",
                image:"/images/icons/one-click.svg"
            }
        ]

    }
]
  return (
    <>
      <PageHeader
        title={"Simplicity of Shared Hosting with the Power of Cloud"}
        mark={"Full SSD servers"}
        description={"Scales with your traffic"}
        buttonPath={"#plans"}
        buttonText={"View Plans"}
        image={"/images/pages/Cloud Hosting.png"}
        alt={"Noobbot Windows Reseller Hosting"}
      />
      <DomainCTA />
      <PricingTabs tabLists={pricingLists} tabContents={tabPricing}>
        <PricingStandard pricings={pricingsTableTab1} />
        <PricingStandard pricings={pricingsTableTab2} />
      </PricingTabs>
      <WhyNoobbotForDomain image={true} title={whyFeatures[0].title} subTitle={whyFeatures[0].subTitle} features={whyFeatures[0].features}/>
      <Faq faqs={faqs} />
      <RelatedPricing products={relatedProducts} />
    </>
  );
}
export default CloudHosting;
