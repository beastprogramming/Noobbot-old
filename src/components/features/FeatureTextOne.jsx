import React from "react";

function FeatureTextOne(props) {
  return (
    <>
      <section className="nb-py-8">
        <div className="nb-container ">
          <div className="nb-grid nb-grid-cols-1 md:nb-grid-cols-2">
            <div className="lg:nb-pl-4 md:nb-border-r-2 nb-border-primary-bunty nb-border-opacity-25 nb-mb-2">
              <h2 className="nb-text-2xl md:nb-text-3xl lg:nb-text-4xl nb-text-primary-bunty nb-font-bold nb-italic nb-leading-tight">
                {props.title}
              </h2>
            </div>
            <div className="lg:nb-pl-4">
              <p className="nb-text-md lg:nb-text-xl nb-font-semibold nb-text-primary-blue nb-tracking-wide">{props.subTitle}</p>
            </div>
          </div>
          <div className="nb-grid nb-grid-cols-1 md:nb-grid-cols-2 lg:nb-grid-cols-4 gap-4 nb-my-8">
            {props.features.map((feature, index) => (
              <div className="nb-p-2" key={index}>
                {props.image ? (
                  <img src={feature.image} alt={feature.title} className="nb-h-20 nb-w-20" />
                ) : (
                  <i
                    className={`nb-mb-2 la-3x nb-text-primary-red ${feature.icon}`}
                    title={feature.title}
                  ></i>
                )}
                <h1 className="nb-text-xl nb-font-bold nb-mb-2">
                  {feature.title}
                </h1>
                <h2 className="nb-text-sm nb-tracking-wider nb-text-left">
                  {feature.description}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

FeatureTextOne.defaultProps = {
  title: "Why should you get your domain through Noobbot?",
  subTitle:
    "There are seven reasons for you to choose Noobbot for your business domain name.",
    image:false
};

export default FeatureTextOne;
