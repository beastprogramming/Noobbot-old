import React from 'react';

import {Link} from 'react-router-dom';

function RelatedProducts() {
    return (
        <>

        <section className="nb-py-8">
            <div className="nb-container">
                <div className="nb-py-8">
                    <div className="nb-text-2xl nb-font-semibold nb-text-left nb-text-primary-bunty nb-mb-10  nb-border-l-4 nb-border-primary-blue nb-pl-8">Maybe, you are looking these.</div>

                    <div className="nb-grid nb-grid-cols-1 lg:nb-grid-cols-4 nb-gap-4">
                        <div className="nb-shadow-md nb-bg-white nb-rounded-b-lg">
                            <img src="https://home.pl/img/cms/f0ab6787-f1dd-47e0-b621-313323796ad4/office-365-business-medium.jpg?version=0" alt="Pricing Header" className="nb-w-full nb-rounded-t-lg" />
                            <div className="nb-flex nb-justify-center nb-items-center nb-h-16 nb-w-16 nb-p-2 nb-bg-white nb-rounded-md nb--mt-9 nb-mb-4 nb-ml-4 nb-shadow-lg nb-relative">
                                <img src="https://home.pl/img/cms/75d8d722-fdca-4446-b08b-0c2d73d24885/office-365-logo-fluent-design.png?version=0" alt="Logo" />
                            </div>
                            <div className="nb-p-4">
                                <p className="nb-text-lg nb-font-bold nb-text-primary-bunty nb-tracking-wide nb-mb-4">Google Workspace Business Standard</p>
                                <p className="nb-text-sm nb-text-primary-bunty nb-opacity-75">Dawniej G Suite Business - aplikacje biurowe od Google </p>
                                <div className="nb-mt-4">
                                    <p className="nb-text-md nb-line-through nb-font-semibold nb-opacity-60 nb-text-primary-bunty">₹1,080.00</p>
                                    <p className="nb-text-lg nb-font-bold nb-text-primary-bunty nb-flex nb-items-center nb-mb-2">₹800.00<span className="nb-text-xs nb-text-primary-bunty nb-opacity-75 nb-ml-1">per month</span></p>
                                    <Link to="#" title="Learn More"><div class="nb-text-md nb-rounded-md nb-bg-gray-100 hover:nb-bg-gray-200 nb-p-2 nb-text-primary-bunty nb-font-semibold nb-text-center nb-uppercase">Learn More</div></Link>
                                </div>
                            </div>
                        </div>
                       
                    </div>

                </div>
            </div>
        </section>

        </>
    )
}
export default RelatedProducts;