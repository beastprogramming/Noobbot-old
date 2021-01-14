import React from 'react';
import {Link} from 'react-router-dom';
function ProductFeatureImage(props){
    return(
        <>
            <div className="nb-container nb-mb-32">
                <div className="nb-grid nb-grid-cols-1 lg:nb-grid-cols-3 nb-gap-4">
                    <div className="nb-order-1 nb-col-span-2">
                        <h2 className="nb-text-1xl md:nb-text-2xl lg:nb-text-3xl nb-font-medium nb-text-primary-bunty nb-mb-4">{props.title}</h2>
                        
                        <h4 className="nb-text-lg nb-font-semibold nb-mb-2">{props.description.title}</h4>
                        <p className="nb-text-lg  nb-leading-relaxed nb-text-justify nb-mb-4">{props.description.detail}</p>
                        <Link to={props.path} className="nb-transition nb-duration-100 nb-ease-in-out nb-text-lg nb-font-semibold nb-text-primary-blue  nb-border-b-0 hover:nb-border-b-2 hover:nb-border-primary-red">View Linux KVM VPS <i className="las la-arrow-right nb-ml-1"></i></Link>

                    </div>
                    <div className="nb-order-2 nb-col-span-1">
                        <img className="nb-w-full" src={props.image} alt={props.title} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductFeatureImage;