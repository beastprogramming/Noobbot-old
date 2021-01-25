import React from "react";

function ProductFeatureImageList(props) {
  return (
    <>
      <div className="nb-container nb-mb-32">
        <h2 className="nb-text-xl md:nb-text-2xl lg:nb-text-3xl nb-text-center nb-font-bold nb-text-primary-bunty nb-mb-4">
          {props.title}
        </h2>
        <div className="nb-grid nb-grid-cols-1 lg:nb-grid-cols-2 nb-gap-4">
          {props.features.map((feature, index) => (
            <div key={index} className="nb-p-4">
              <img src={feature.image} alt={feature.alt} className="nb-mb-8" />
              <p className="nb-text-xl nb-tracking-wide nb-text-primary-bunty nb-font-bold nb-mb-4">
                {feature.title}
              </p>
              {props.lists ? (
                <ul>
                  {feature.lists.map((list, index) => (
                    <li key={index} className="nb-flex nb-items-start ">
                      <i className="la la-check-circle nb-text-lg nb-font-bold nb-text-primary-green nb-mr-2"></i>
                      <p className="nb-text-primary-bunty nb-font-bold nb-opacity-75 nb-text-md">
                        {list.title}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="nb-text-md nb-opacity-60 nb-text-primary-bunty nb-font-bold">
                  {feature.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductFeatureImageList;
