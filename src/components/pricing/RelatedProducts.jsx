import React from 'react';

import {Link} from 'react-router-dom';

function RelatedProducts(props) {
    return (
        <>

        <section className="nb-py-8">
            <div className="nb-container">
                <div className="nb-py-8">
                    <div className="nb-text-2xl nb-font-semibold nb-text-left nb-text-primary-bunty nb-mb-10  nb-border-l-4 nb-border-primary-blue nb-pl-8">Maybe, you are looking these.</div>

                    <div className="nb-grid nb-grid-cols-1 lg:nb-grid-cols-4 nb-gap-4">

                        {props.products.map((product,index) => (

                        <div className="nb-shadow-md nb-bg-white nb-rounded-b-lg" key={index}>
                            <img src={product.bannerImage} alt="Pricing Header" className="nb-w-full nb-rounded-t-lg" />
                            <div className="nb-flex nb-justify-center nb-items-center nb-h-16 nb-w-16 nb-p-2 nb-bg-white nb-rounded-md nb--mt-9 nb-mb-4 nb-ml-4 nb-shadow-lg nb-relative">
                                <img src={product.icon} alt="Service Logo" />
                            </div>
                            <div className="nb-p-4">
                                <p className="nb-text-lg nb-font-bold nb-text-primary-bunty nb-tracking-wide nb-mb-4">{product.title}</p>
                                <p className="nb-text-sm nb-text-primary-bunty nb-opacity-75">{product.subtitle}</p>
                                <div className="nb-mt-4">
                                    <p className="nb-text-sm nb-font-semibold nb-text-primary-red">Starting from</p>
                                    <p className="nb-text-lg nb-font-bold nb-text-primary-bunty nb-flex nb-items-center nb-mb-2">₹{product.price}<span className="nb-text-xs nb-text-primary-bunty nb-opacity-75 nb-ml-1">{product.uom}</span></p>
                                    <Link to={product.path} title="Learn More"><div className="nb-text-md nb-rounded-md nb-bg-gray-100 hover:nb-bg-gray-200 nb-p-2 nb-text-primary-bunty nb-font-semibold nb-text-center nb-uppercase">Learn More</div></Link>
                                </div>
                            </div>
                        </div>

                        ))}

                       
                    </div>

                </div>
            </div>
        </section>

        </>
    )
}
export default RelatedProducts;