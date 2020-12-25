import React from 'react';
import {Link} from 'react-router-dom';

function FeatureRightOne() {
    return(
        <>
            <section className="nb-bg-primary-blue">
                <div className="nb-flex nb-flex-col lg:nb-flex-row lg:nb-pt-8">
                    <div className="nb-w-100 nb-p-4 lg:nb-py-6 lg:nb-px-8 nb-flex nb-items-justify nb-items-center">
                        <h2 className="nb-text-xl md:nb-text-2xl lg:nb-text-3xl nb-text-white nb-font-bold">Noobbot Can Help You to Build Your Complete Online Presence.</h2>
                    </div>
                    <div className="nb-w-100 lg:w-3/6 nb-bg-white nb-p-4">
                        <div className="nb-grid nb-grid-cols-1 lg:nb-grid-cols-3 nb-gap-4 lg:nb-py-8">
                            <div className="nb-bg-gray-100 nb-p-4 nb-flex nb-flex-col nb-justify-between">
                                <h4 className="nb-text-xl nb-font-bold nb-leading-tight nb-h-16">Business Name Generator</h4>
                                <h5 className="nb-text-sm nb-mb-4 nb-tracking-wide">This tool will help you find business name in minutes. Our
                                    free business name generator suggest right name for your business. </h5>
                                <Link to="" className="nb-text-lg nb-font-bold nb-text-primary-blue nb-tracking-wide">Learn More<i
                                        className="las la-arrow-right nb-ml-1 nb-font-bold"></i></Link>
                            </div>
                            <div className="nb-bg-gray-100 nb-p-4 nb-flex nb-flex-col nb-justify-between">
                                <h4 className="nb-text-xl nb-font-bold nb-leading-tight nb-h-16">Your Personalized Business Email</h4>
                                <h5 className="nb-text-sm nb-mb-4 nb-tracking-wide">Give your business a professional makeover with 
                                    <strong> email@yourbrand.com</strong>. Boost your professional credibility with a custom email
                                    address. </h5>
                                <Link to="" className="nb-text-lg nb-font-bold nb-text-primary-blue nb-tracking-wide">Learn More<i
                                        className="las la-arrow-right nb-ml-1 nb-font-bold"></i></Link>
                            </div>
                            <div className="nb-bg-gray-100 nb-p-4 nb-flex nb-flex-col nb-justify-between">
                                <h4 className="nb-text-xl nb-font-bold nb-leading-tight nb-h-16">Hosting - At it's Simplest Best</h4>
                                <h5 className="nb-text-sm nb-mb-4 nb-tracking-wide">Get your Business Online in an Affordable way. Our web
                                    application accelerator, powered by Varnish Cache, ensures the maximum performance.</h5>
                                <Link to="" className="nb-text-lg nb-font-bold nb-text-primary-blue nb-tracking-wide">Learn More<i
                                        className="las la-arrow-right nb-ml-1 nb-font-bold"></i></Link>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default FeatureRightOne;