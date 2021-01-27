import React from "react";

import PageHeader from "../../components/hero/PageHeroOne";
import ProductFeatureImage from "../../components/features/ProductFeatureImage";
import Faq from "../../components/faq/FaqOne";
import RelatedPricing from "../../components/pricing/RelatedProducts";

function LinuxVpsServer() {
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

  let featureDeployment = [
    {
      title: "Instant Provisioning",
      description:
        "Get up and running instantly! Our servers are provisioned within a few minutes.",
    },
    {
      title: "Choose your Operating System",
      description:
        "Get complete flexibility to choose the operating system that works for you. Here are operating systems available with our servers:",
    },
    {
      title: "Choose your management panel",
      description:
        "Optionally, you can choose a Control Panel for easy Server Management. Here the available add-ons:",
    },
  ];

  let featureAdditionalStorage = [
    {
      title: "High-performance Storage Volumes for your VPS",
      description: "At Rs. 20.00/GB/month",
    },
    {
      title: "Flexible Volumes",
      description:
        "Get expandable additional SSD storage volumes from 10 GB to 500 GB and available with both new and existing orders from your order management panel",
    },
    {
      title: "Simplified Billing",
      description:
        "Available at a flat fee. No complicated billing based on Bandwidth or IOPS usage",
    },
  ];

  let featureManage = [
    {
      title: "Server Management",
      description:
        "You can Start, Stop, Restart, Rebuild your VPS from the Server Management Panel.",
    },
    {
      title: "Full Root Access",
      description:
        "With full root access, you get complete control to manage your server resources",
    },
    {
      title: "VNC Access",
      description:
        "VNC allows you quick access to your VPS for easy management",
    },
    {
      title: "WHMCS",
      description:
        "Optionally, you can install & integrate WHMCS with your VPS Server seamlessly.",
    },
  ];

  let featureSecure = [
    {
      title: "DDOS Protection",
      description:
        "Our advanced DDOS protection ensures that your VPS is protected against any attacks.",
    },
    {
      title: "State-of-the-art Infrastructure",
      description:
        "All VPS servers are powered by trusted infrastructure to keep them up and running:",
    },
    {
      title: "Private Networking",
      description: "Setup your own network instantly in a few clicks.",
    },
  ];

  let featureSupport = [
    {
      title: "We are available 24/7 to help you with your queries",
      description:
        "Our servers include semi-managed support related to: Boot, Login, Investigating Network/Hardware, Initial module installation and basic firewall setup, Setup and re-installation of KVM VPS, Core OS Updates & Patches, Reverse DNS Setup related issues. ",
    },
  ];

  return (
    <>
      <PageHeader
        bgColor={"green"}
        title={"Linux KVM VPS Hosting"}
        mark={"Full Root Access & Instant Provisioning"}
        description={
          "High-performance Servers for Faster Websites & Applications"
        }
        buttonPath={"#plans"}
        buttonText={"View Plans"}
        image={"/images/pages/Linux VPS.png"}
        alt={"Noobbot Linux KVM VPS Hosting"}
      />
      <ProductFeatureImage
        order={"right"}
        title={"Deployment"}
        image={"/images/pages/deployment.png"}
        path={""}
        pathTitle={"Find out more"}
        features={featureDeployment}
      />
      <ProductFeatureImage
        order={"left"}
        title={"Management"}
        image={"/images/pages/management.png"}
        path={""}
        features={featureManage}
      />
      <ProductFeatureImage
        order={"right"}
        title={"Security"}
        image={"/images/pages/secure.png"}
        path={""}
        features={featureSecure}
      />
      <ProductFeatureImage
        order={"left"}
        title={"Additional Storage"}
        image={"/images/pages/storage.png"}
        path={""}
        features={featureAdditionalStorage}
      />
      <ProductFeatureImage
        order={"right"}
        title={"Get Support"}
        image={"/images/pages/support.png"}
        path={""}
        features={featureSupport}
      />
      <Faq faqs={faqs} />
      <RelatedPricing products={relatedProducts} />
    </>
  );
}
export default LinuxVpsServer;
