import React from "react";
import { Link } from "react-router-dom";
function PageHeroOne(props) {
  return (
    <>
      <section className={`py-12 nb-bg-${props.bgColor}-50`}>
        <div className="nb-container">
          <div className="nb-flex nb-items-center nb-flex-col lg:nb-flex-row">
            <div className="nb-w-full lg:nb-w-3/5 nb-mb-4 lg:nb-mb-0 lg:nb-mr-2 nb-p-2">
              <h1 className="hero-h1 nb-text-primary-bunty nb-mb-2">{props.title}</h1>
              <p className="nb-text-lg nb-text-primary-bunty nb-mb-2"><mark className="mark-yello">{props.mark}</mark></p>
              <h2 className="nb-text-xl nb-font-medium nb-text-primary-blue nb-leading-snug nb-mb-4">{props.description}</h2>
              <div className="nb-flex nb-flex-col lg:nb-flex-row nb-items-center">
                <Link
                  to={props.buttonPath}
                  type="button"
                  className="nb-rounded nb-border-primary-red nb-border-2 nb-py-2 lg:nb-py-3 nb-px-8 nb-text-xl nb-font-bold nb-bg-primary-red nb-text-white nb-cursor-pointer nb-mr-4 md:nb-mr-8 nb-mb-4 lg:nb-mb-0"
                >
                 {props.buttonText}
                </Link>
                <Link
                  to=""
                  className="nb-transition-all nb-text-sm nb-font-semibold nb-text-primary-blue  nb-border-b hover:nb-border-b-2 nb-border-primary-red"
                >
                    Talk To A Specialist
                  <i className="las la-arrow-right nb-ml-1"></i>
                </Link>
              </div>
            </div>
            <div className="nb-w-full lg:nb-w-2/5 nb-mb-4 lg:nb-mb-0 lg:nb-ml-2">
              <img src={props.image} alt={props.alt} className="nb-w-full" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
PageHeroOne.defaultProps = {
  bgColor: "blue"
}
export default PageHeroOne;
