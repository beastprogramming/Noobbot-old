import React from 'react';

function TestimonialOne() {
    return(
        <>
        <section className="nb-bg-gray-100 nb-py-4">
            <div className="nb-container nb-my-8">
                <div className="nb-grid nb-grid-cols-1 lg:nb-grid-cols-3 nb-ganb-p-4">
                    <div className="nb-col-span-1">
                        <h1 className="nb-text-lg nb-font-bold nb-text-primary-blue nb-uppercase nb-mb-2 nb-tracking-wider">RATINGS & REVIEWS</h1>
                        <h2 className="nb-text-2xl nb-font-black nb-italic nb-text-primary-bunty nb-mb-2 nb-leading-tight">The most trusted hosting
                            service providor for small buisness.</h2>
                        <h2 className="nb-text-lg nb-font-medium nb-text-primary-bunty">Thousands of businesses like you have choosen Noobbot
                            to host and making online presence. We're proud to deliver 5-star service.</h2>
                    </div>
                    <div className="nb-col-span-2 ">
                        <div className="nb-flex nb-flex-col md:nb-flex-row nb-justify-center nb-items-center">
                            <div
                                className="nb-w-full md:nb-w-1/2 nb-m-2 nb-border-2 nb-rounded hover:nb-shadow-block-green nb-border-primary-green nb-bg-white">
                                <div className="nb-flex nb-justify-between nb-items-center nb-px-4 nb-py-2 nb-bg-primary-bunty">
                                    <div className="">
                                        <p className="nb-text-xs nb-font-semibold nb-text-white nb-mb-2">Review by <span>Gov't Network
                                                Tech</span></p>
                                        <ul className="nb-flex">
                                            <li className="nb-text-yellow-500"><i className="las la-star"></i></li>
                                            <li className="nb-text-yellow-500"><i className="las la-star"></i></li>
                                            <li className="nb-text-yellow-500"><i className="las la-star"></i></li>
                                            <li className="nb-text-yellow-500"><i className="las la-star"></i></li>
                                            <li className="nb-text-yellow-500"><i className="las la-star"></i></li>
                                        </ul>
                                    </div>
                                    <div className="nb-h-12 nb-w-1/3">
                                        <img src="https://cdn.trustpilot.net/brand-assets/1.1.0/logo-white.svg"
                                            alt="trustpilot" />
                                    </div>
                                </div>
                                <div className="nb-bg-white nb-p-4">
                                    <h1 className="nb-text-sm nb-font-semibold nb-text-primary-bunty nb-mb-2">Awesome speed for my website
                                        Project</h1>
                                    <h1 className="nb-text-lg nb-text-primary-bunty nb-opacity-75">Noobbot helped me to setup my website and
                                        they also consult me to choose right hosting and security.</h1>
                                </div>
                            </div>
                            <div
                                className="nb-w-full md:nb-w-1/2 nb-m-2 nb-border-2 nb-rounded hover:nb-shadow-block-blue nb-border-primary-blue nb-bg-white">
                                <div className="nb-flex nb-justify-between nb-items-center nb-px-4 nb-py-2 nb-bg-primary-bunty">
                                    <div className="">
                                        <p className="nb-text-xs nb-font-semibold nb-text-white">Review by <span>Gov't Network Tech</span>
                                        </p>
                                        <ul className="nb-flex">
                                            <li className="nb-text-yellow-500"><i className="las la-star"></i></li>
                                            <li className="nb-text-yellow-500"><i className="las la-star"></i></li>
                                            <li className="nb-text-yellow-500"><i className="las la-star"></i></li>
                                            <li className="nb-text-yellow-500"><i className="las la-star"></i></li>
                                            <li className="nb-text-yellow-500"><i className="las la-star"></i></li>
                                        </ul>
                                    </div>
                                    <div className="nb-h-12 nb-w-1/3">
                                        <img src="https://hostadvice.com/wp-content/themes/bestwh/img/logo.png"
                                            alt="trustpilot" />
                                    </div>
                                </div>
                                <div className="nb-bg-white nb-p-4">
                                    <h1 className="nb-text-sm nb-font-semibold nb-text-primary-bunty nb-mb-2">Awesome speed for my website
                                        Project</h1>
                                    <h1 className="nb-text-lg nb-text-primary-bunty nb-opacity-75">Noobbot helped me to setup my website and
                                        they also consult me to choose right hosting and security.</h1>
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

export default TestimonialOne;