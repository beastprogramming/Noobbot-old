import React from "react";
import PageHeader from "../../components/hero/PageHeroOne";
import DomainCTA from "../../components/cta/DomainRegisterCTA";
import PricingTabs from "../../components/tabs/pricingTabs";
import PricingStandard from "../../components/pricing/PricingStandard";
import ProductFeatureImageList from "../../components/features/ProductFeatureImageList";
import SpecificationLists from "../../components/features/SpecificationLists";
import Faq from "../../components/faq/FaqOne";
import RelatedPricing from "../../components/pricing/RelatedProducts";

function LinuxResellerHosting() {
  let pricingLists = [
    {
      icon: "/images/flag/ind.svg",
      iconAlt: "IN Hosting",
      text: "IN Hosting",
    },
    {
      icon: "/images/flag/uk.svg",
      iconAlt: "UK Hosting",
      text: "UK Hosting",
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
        "Reseller Hosting allows you to create sub-packages within the allotted Disk Space and Bandwidth of your main Hosting package. You can use WHM to create Individual Custom packages (each with cPanel) and provision them to your Customers. Additionally, you can use WHMCS for billing (Not supported on the base plan).",
    },
    {
      question:
        "Which Control Panels do I get with a Reseller Hosting package?",
      answer:
        "All Reseller Hosting packages come with 2 separate Control Panels - WHM and cPanel. WHM gives you administrative control of your Reseller Hosting package and cPanel allows your Customers to manage their individual Hosting packages.",
    },
    {
      question: "How can I create Sub-Packages and manage them?",
      answer:
        "Your WHM Control Panel allows you to create individual Hosting packages and completely manage them.",
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

  let specifications = [
    {title:"Dual E5530 2.40GHz Xeon quad core hyperthreaded processor"},
    {title:"24 GB RAM"},
    {title:"250 GB RAID 1 (mirrored) OS drive"},
    {title:"1 TB RAID 1 (mirrored) customer data drive cached"},
    {title:"Battery backed, RAID controller for all drives"},
    {title:"Redundant Power, HVAC & Fire-Detection Systems"},
    {title:"PHP 7.3/7.4, Perl, Python, RoR, GD, cURL, CGI, mcrypt3"},
    {title:"Apache 2.4x"},
    {title:"MySQL 5"},
    {title:"Zend Optimizer, Zend Engine, ionCube Loader"},
    {title:"Create Hosting Plans"},
    {title:"Set up and Modify Customer Accounts"},
    {title:"Receive Server Downtime Alerts"},
    {title:"Upload and Manage Web Pages"},
    {title:"View Website Statistics with AWstats"},
    {title:"Brandable with your Company's Logo"},
    {title:"Install Over 250 Scripts with the Softaculous Script Library"},
    {title:"Outlook, Thunderbird and Windows Mail compatible"},
    {title:"iPhone, Android and PDA support"},
    {title:"Feature packed Webmail"},
    {title:"Advance Spam/Virus Protection"},
    {title:"Mail Forwards, Email Aliases, Auto Responders"},
    {title:"Unlimited Mailing Lists, Catch All Accounts, Mail Spam Filters"},
    {title:"Parked Domains"},
    {title:"Free DNS Management"},
    {title:"Domain Forwarding, Path Forwarding, URL Masking"}
  ];

  let features= [
    {
      image:"/images/pages/whm.png",
      alt:"Powerful Hosting Control Panel - WHM",
      title:"Powerful Hosting Control Panel - WHM",
      lists:[
        {title:"Complete Administrative Control"},
        {title:"Monitor Server Status around the clock"},
        {title:"Create Hosting Packages - Limit Disk Space, Bandwidth, Email, Databases etc."}
      ]
    },
    {
      image:"/images/pages/whmcs.png",
      alt:"All in one Billing & Client Management Solution - WHMCS",
      title:"All in one Billing & Client Management Solution - WHMCS",
      lists:[
        {title:"Easily manage all Billing, Client Management and Support functions"},
        {title:"Integrated Domain Management"},
        {title:"Customizable, Simple and Secure"}
      ]
    },
    {
      image:"/images/pages/cpanel.png",
      alt:"Easy to Use Customer Control Panel - cPanel",
      title:"Easy to Use Customer Control Panel - cPanel",
      lists:[
        {title:"World's Leading Customer Control Panel"},
        {title:"Manage Web Pages, View Website Statistics, Create Email Accounts etc."},
        {title:"Comes with Softaculous Script Installer - Install Blogs, Shopping Carts etc."}
      ]
    },
    {
      image:"/images/pages/support.png",
      alt:"Reliable Support",
      title:"Reliable Support",
      lists:[
        {title:"99.9% Uptime Guarantee"},
        {title:"15 Day Money Back Guarantee"},
        {title:"24x7x365 Support"}
      ]
    },
    {
      image:"/images/pages/infrastructure.png",
      alt:"Robust Infrastructure",
      title:"Robust Infrastructure",
      lists:[
        {title:"State-of-the-art Datacenters"},
        {title:"Dual Quad-Core Xeon powered Servers"},
        {title:"Redundant Scalable Servers"}
      ]
    },
    {
      image:"/images/pages/email-included.png",
      alt:"Advanced Email Hosting Included",
      title:"Advanced Email Hosting Included",
      lists:[
        {title:"Unlimited POP3 Email Accounts with SMTP"},
        {title:"IMAP Support"},
        {title:"Easy to use Webmail Interface"}
      ]
    },
    {
      image:"/images/pages/hosting-features.png",
      alt:"Hosting Features & Addons",
      title:"Hosting Features & Addons",
      lists:[
        {title:"Unlimited Add-On Domains"},
        {title:"Unlimited Sub-Domains"},
        {title:"Unlimited Databases"},
        {title:"Parked Domains"},
        {title:"Unlimited FTP Accounts"},
        {title:"Private SSL Available"},
        {title:"Add-on Dedicated IP"}
      ]
    }
]

  return (
    <>
      <PageHeader
        bgColor={"red"}
        title={"Powerful Linux Reseller Hosting"}
        mark={"Now with FREE SSL & Free WHMCS"}
        description={"Cheap Unlimited Reseller Hosting"}
        buttonPath={"#plans"}
        buttonText={"View Plans"}
        image={"/images/pages/Linux Reseller Hosting.png"}
        alt={"Noobbot Linux Reseller Hosting"}
      />
      <DomainCTA />
      <PricingTabs tabLists={pricingLists} tabContents={tabPricing}>
        <PricingStandard pricings={pricingsTableTab1} />
        <PricingStandard pricings={pricingsTableTab2} />
      </PricingTabs>
      <ProductFeatureImageList lists={true} title={"Features"} features={features} />
      <SpecificationLists title={"Technical Specifications"} specifications={specifications} />
      <Faq faqs={faqs} />
      <RelatedPricing products={relatedProducts} />
    </>
  );
}
export default LinuxResellerHosting;
