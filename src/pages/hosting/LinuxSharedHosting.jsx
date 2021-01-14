import React from "react";
import { Link } from "react-router-dom";

import PageHeader from "../../components/hero/PageHeroOne";
import DomainCTA from "../../components/cta/DomainRegisterCTA";
import ProductFeatureImage from "../../components/features/ProductFeatureImage";
import RelatedPricing from "../../components/pricing/RelatedProducts";
function LinuxSharedHosting() {
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
    },
  ];
  return (
    <>
      <PageHeader />
      <DomainCTA />
      <section className="nb-py-8">
        <div className="nb-container nb-p-4">
          <ul className="nb-flex nb-items-center nb-justify-center">
            <li className="nb-flex nb-items-center nb-border-2 nb-border-r nb-border-primary-blue nb-py-2 nb-px-6 nb-bg-primary-blue nb-text-white hover:nb-bg-primary-blue hover:nb-text-white nb-cursor-pointer nb-font-bold">
              <img
                className="nb-mr-1 nb-h-6"
                src="/images/flag/ind.svg"
                alt="India Flag"
              />
              India
            </li>
            <li className="nb-flex nb-items-center nb-border-2 nb-border-l nb-border-r nb-border-primary-blue nb-py-2 nb-px-6 nb-text-primary-blue hover:nb-bg-primary-blue hover:nb-text-white nb-cursor-pointer nb-font-bold">
              <img
                className="nb-mr-1 nb-h-6"
                src="/images/flag/usa.svg"
                alt="USA Flag"
              />
              USA (Texas)
            </li>
            <li className="nb-flex nb-items-center nb-border-2 nb-border-l nb-border-r nb-border-primary-blue nb-py-2 nb-px-6 nb-text-primary-blue hover:nb-bg-primary-blue hover:nb-text-white nb-cursor-pointer nb-font-bold">
              <img
                className="nb-mr-1 nb-h-6"
                src="/images/flag/uk.svg"
                alt="UK Flag"
              />
              United Kingdom
            </li>
            <li className="nb-flex nb-items-center nb-border-2 nb-border-l nb-border-primary-blue nb-py-2 nb-px-6 nb-text-primary-blue hover:nb-bg-primary-blue hover:nb-text-white nb-cursor-pointer nb-font-bold">
              <img
                className="nb-mr-1 nb-h-6"
                src="/images/flag/hk.svg"
                alt="Hong Kong Flag"
              />
              Hong Kong
            </li>
          </ul>
          <div className="">
            <p className="nb-text-md lg:nb-text-xl nb-font-semibold nb-text-primary-bunty nb-tracking-wide nb-my-6 nb-text-center">
              Best suited for visitors from India, South & Central Asia
            </p>

            <div className="nb-grid nb-grid-cols-4 nb-gap-4">
              <div className="nb-border-2 nb-border-primary-blue nb-p-4 nb-rounded">
                <h1 className="nb-text-2xl nb-font-bold nb-text-primary-bunty nb-text-center">
                  SDH-Linux-India Plan1
                </h1>
                <h2 className="nb-text-sm nb-font-semibold nb-opacity-75 nb-text-primary-blue nb-text-center">
                  Free WHMCS Included
                </h2>
                <ul className="nb-mt-8 nb-mb-4">
                  <li className="pricing-icon-tick nb-text-lg nb-text-primary-bunty">
                    <p className="nb-text-sm">99.9% Uptime Guarantee</p>
                  </li>
                  <li className="pricing-icon-tick nb-text-lg nb-text-primary-bunty">
                    <p className="nb-text-sm">WHM for Management</p>
                  </li>
                  <li className="pricing-icon-tick nb-text-lg nb-text-primary-bunty">
                    <p className="nb-text-sm">Softaculous Included</p>
                  </li>
                </ul>
                <h2 className="nb-text-sm nb-font-semibold nb-text-primary-blue nb-text-center nb-opacity-75">
                  Starting From
                </h2>
                <h1 className="nb-mb-4 nb-text-3xl nb-font-semibold nb-text-primary-blue nb-text-center">
                  <span className="nb-text-xl">₹</span>
                  1,080.00
                  <span className="nb-text-xl">per mo</span>
                </h1>
                <Link to="" className="">
                  <div className="nb-h-12 nb-rounded nb-border-primary-red nb-border-2 nb-p-2 nb-text-xl nb-font-bold nb-bg-primary-red nb-text-white nb-cursor-pointer nb-text-center">
                    View Plans
                  </div>
                </Link>
              </div>

              <div className="nb-border-2 nb-border-primary-blue nb-p-4 nb-rounded">
                <h1 className="nb-text-2xl nb-font-bold nb-text-primary-bunty nb-text-center">
                  SDH-Linux-India Plan2
                </h1>
                <h2 className="nb-text-sm nb-font-semibold nb-opacity-75 nb-text-primary-blue nb-text-center">
                  Free WHMCS Included
                </h2>
                <ul className="nb-mt-8 nb-mb-4">
                  <li className="pricing-icon-tick nb-text-lg nb-text-primary-bunty">
                    <p className="nb-text-sm">99.9% Uptime Guarantee</p>
                  </li>
                  <li className="pricing-icon-tick nb-text-lg nb-text-primary-bunty">
                    <p className="nb-text-sm">WHM for Management</p>
                  </li>
                  <li className="pricing-icon-tick nb-text-lg nb-text-primary-bunty">
                    <p className="nb-text-sm">Softaculous Included</p>
                  </li>
                </ul>
                <h2 className="nb-text-sm nb-font-semibold nb-text-primary-blue nb-text-center nb-opacity-75">
                  Starting From
                </h2>
                <h1 className="nb-mb-4 nb-text-3xl nb-font-semibold nb-text-primary-blue nb-text-center">
                  <span className="nb-text-xl">₹</span>
                  1,080.00
                  <span className="nb-text-xl">per mo</span>
                </h1>
                <Link to="" className="">
                  <div className="nb-h-12 nb-rounded nb-border-primary-red nb-border-2 nb-p-2 nb-text-xl nb-font-bold nb-bg-primary-red nb-text-white nb-cursor-pointer nb-text-center">
                    View Plans
                  </div>
                </Link>
              </div>

              <div className="nb-border-2 nb-border-primary-blue nb-p-4 nb-rounded">
                <h1 className="nb-text-2xl nb-font-bold nb-text-primary-bunty nb-text-center">
                  MDH-Linux-India Plan3
                </h1>
                <h2 className="nb-text-sm nb-font-semibold nb-opacity-75 nb-text-primary-blue nb-text-center">
                  Free WHMCS Included
                </h2>
                <ul className="nb-mt-8 nb-mb-4">
                  <li className="pricing-icon-tick nb-text-lg nb-text-primary-bunty">
                    <p className="nb-text-sm">99.9% Uptime Guarantee</p>
                  </li>
                  <li className="pricing-icon-tick nb-text-lg nb-text-primary-bunty">
                    <p className="nb-text-sm">WHM for Management</p>
                  </li>
                  <li className="pricing-icon-tick nb-text-lg nb-text-primary-bunty">
                    <p className="nb-text-sm">Softaculous Included</p>
                  </li>
                </ul>
                <h2 className="nb-text-sm nb-font-semibold nb-text-primary-blue nb-text-center nb-opacity-75">
                  Starting From
                </h2>
                <h1 className="nb-mb-4 nb-text-3xl nb-font-semibold nb-text-primary-blue nb-text-center">
                  <span className="nb-text-xl">₹</span>
                  1,080.00
                  <span className="nb-text-xl">per mo</span>
                </h1>
                <Link to="" className="">
                  <div className="nb-h-12 nb-rounded nb-border-primary-red nb-border-2 nb-p-2 nb-text-xl nb-font-bold nb-bg-primary-red nb-text-white nb-cursor-pointer nb-text-center">
                    View Plans
                  </div>
                </Link>
              </div>

              <div className="nb-border-2 nb-border-primary-blue nb-p-4 nb-rounded">
                <h1 className="nb-text-2xl nb-font-bold nb-text-primary-bunty nb-text-center">
                  MDH-Linux-India Plan4
                </h1>
                <h2 className="nb-text-sm nb-font-semibold nb-opacity-75 nb-text-primary-blue nb-text-center">
                  Free WHMCS Included
                </h2>
                <ul className="nb-mt-8 nb-mb-4">
                  <li className="pricing-icon-tick nb-text-lg nb-text-primary-bunty">
                    <p className="nb-text-sm">99.9% Uptime Guarantee</p>
                  </li>
                  <li className="pricing-icon-tick nb-text-lg nb-text-primary-bunty">
                    <p className="nb-text-sm">WHM for Management</p>
                  </li>
                  <li className="pricing-icon-tick nb-text-lg nb-text-primary-bunty">
                    <p className="nb-text-sm">Softaculous Included</p>
                  </li>
                </ul>
                <h2 className="nb-text-sm nb-font-semibold nb-text-primary-blue nb-text-center nb-opacity-75">
                  Starting From
                </h2>
                <h1 className="nb-mb-4 nb-text-3xl nb-font-semibold nb-text-primary-blue nb-text-center">
                  <span className="nb-text-xl">₹</span>
                  1,080.00
                  <span className="nb-text-xl">per mo</span>
                </h1>
                <Link to="" className="">
                  <div className="nb-h-12 nb-rounded nb-border-primary-red nb-border-2 nb-p-2 nb-text-xl nb-font-bold nb-bg-primary-red nb-text-white nb-cursor-pointer nb-text-center">
                    View Plans
                  </div>
                </Link>
              </div>
            </div>

            <p className="nb-text-md lg:nb-text-xl nb-font-semibold nb-text-primary-bunty nb-tracking-wide nb-mt-6 nb-text-center">
              If not satisfied, get your money back by cancelling within 30 days
            </p>
          </div>
        </div>
      </section>

      <ProductFeatureImage
        order="right"
        title="Linux KVM VPS"
        image="https://home.pl/img/home/base/pages/serwery/servers-servers.png"
        path="#"
        pathTitle="View Linux KVM VPS"
        features={feature1}
      />
      <ProductFeatureImage
        order="left"
        title="Dedicated server"
        image="https://home.pl/img/home/base/pages/serwery/servers-cloud.png"
        path="#"
        pathTitle="View Dedicated Servers"
        features={feature2}
      />
       <ProductFeatureImage
        order="right"
        title="One click to start building your website"
        image="https://home.pl/img/home/base/pages/hosting/cms.png"
        path="#"
        pathTitle="Find out more"
        features={feature3}
      />

      <RelatedPricing />
    </>
  );
}
export default LinuxSharedHosting;
