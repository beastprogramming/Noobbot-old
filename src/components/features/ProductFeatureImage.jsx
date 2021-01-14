import React from 'react';
import {Link} from 'react-router-dom';


function ProductFeatureImage(props){

    return(
        <>
            <div className="nb-container nb-mb-32">
                <div className="nb-grid nb-grid-cols-1 lg:nb-grid-cols-3 nb-gap-4">
                    <div className={`${props.order === "left" ? "nb-order-2" : "nb-order-1" } nb-col-span-2`}>
                        <h2 className="nb-text-lg md:nb-text-1xl lg:nb-text-2xl nb-font-medium nb-text-primary-bunty nb-mb-4">{props.title}</h2>
                        {props.features.map((feature) => (
                            <>
                                <h4 className="nb-text-lg nb-font-semibold nb-mb-2">{feature.title}</h4>
                                <p className="nb-text-lg nb-text-justify nb-mb-4">{feature.description}</p>
                            </>
                        ))}
                        <Link to={props.path} className="nb-transition nb-duration-100 nb-ease-in-out nb-text-sm nb-font-bold nb-text-primary-blue nb-border-b-2 hover:nb-border-b-4 nb-border-primary-red">{props.pathTitle}</Link>

                    </div>
                    <div className={`${props.order === "left" ? "nb-order-1" : "nb-order-2" } nb-col-span-1`}>
                        <img className="nb-w-full" src={props.image} alt={props.title} />
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProductFeatureImage;