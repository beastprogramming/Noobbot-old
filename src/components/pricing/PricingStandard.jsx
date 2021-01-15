import React from "react";
import { Link } from "react-router-dom";

function PricingStandard(props) {
  return (
    <>
      <section className="nb-py-4">
        <div className="nb-container nb-my-4 md:nb-my-8 lg:nb-my-16">
          <div className="nb-text-center nb-my-4 md:nb-my-8 lg:nb-my-12">
            <h3 className="nb-text-3xl lg:nb-text-5xl nb-font-bold nb-text-primary-bunty nb-tracking-wide">
              {props.title}
            </h3>
            <h4 className="nb-text-xl lg:nb-text-3xl nb-font-semibold nb-text-primary-blue nb-tracking-wide">
              {props.subtitle}
            </h4>
          </div>
          <div className="nb-grid nb-grid-cols-1 md:nb-grid-cols-2 lg:nb-grid-cols-4 nb-gap-4">
            {props.pricings.map((pricing, index) => (

              <div key={index} className="nb-border-2 nb-border-primary-blue nb-p-4 nb-rounded">
                <h1 className="nb-text-2xl nb-font-bold nb-text-primary-bunty nb-text-center">
                  {pricing.title}
                </h1>
                <h2 className="nb-text-sm nb-font-semibold nb-opacity-75 nb-text-primary-blue nb-text-center">
                  {pricing.subtitle}
                </h2>
                <ul className="nb-mt-8 nb-mb-4">
                  {pricing.features.map((feature, index) => (

                    <li key={index} className="pricing-icon-tick nb-text-lg nb-text-primary-bunty">
                      <p className="nb-text-sm">{feature}</p>
                    </li>

                  ))}
                  
                </ul>
                <h2 className="nb-text-sm nb-font-semibold nb-text-primary-blue nb-text-center nb-opacity-75">
                  Starting From
                </h2>
                <h1 className="nb-mb-4 nb-text-3xl nb-font-semibold nb-text-primary-blue nb-text-center">
                  <span className="nb-text-xl">₹</span>
                  {pricing.price}
                  <span className="nb-text-xl">{pricing.uom}</span>
                </h1>
                <Link to={pricing.path} >
                  <div className="nb-h-12 nb-rounded nb-border-primary-red nb-border-2 nb-p-2 nb-text-xl nb-font-bold nb-bg-primary-red nb-text-white nb-cursor-pointer nb-text-center">
                    View Plans
                  </div>
                </Link>
              </div>

            ))}

          </div>
        </div>
      </section>
    </>
  );
}
export default PricingStandard;
