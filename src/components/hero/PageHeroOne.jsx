import React from 'react';
import {Link} from 'react-router-dom'
function PageHeroOne() {
    return(
        <>
            <section className="nb-py-4">
    <div className="nb-container">
        
        <div className="nb-flex nb-items-center nb-flex-col lg:nb-flex-row">
            <div className="nb-w-full lg:nb-w-2/3 nb-mb-4 lg:nb-mb-0 lg:nb-mr-2 nb-p-2">
                <div className="hero-h1 nb-text-primary-bunty nb-mb-2">
                    Upto 80% Off on all
                    <h1 className="nb-inline"> Web Hosting</h1> Plans
                </div>
                <p className="nb-text-lg nb-text-primary-bunty nb-mb-2"><mark className="mark-yello">Buy now and renew at the same
                        cost!</mark></p>
                <h2 className="nb-text-xl nb-font-medium nb-text-primary-blue nb-leading-snug nb-mb-4">Get Unlimited Hosting with Free
                    Domain, SSL and CDN. 30-Day Money-Back Guarantee and 24/7 Priority Support.</h2>
                <div className="nb-flex nb-flex-col lg:nb-flex-row nb-items-center">
                    <Link to="" type="button"
                        className="nb-rounded nb-border-primary-red nb-border-2 nb-py-2 lg:nb-py-3 nb-px-8 nb-text-xl nb-font-bold nb-bg-primary-red nb-text-white nb-cursor-pointer nb-mr-4 md:nb-mr-8 nb-mb-4 lg:nb-mb-0">View
                        Plans</Link>
                    <Link to=""
                        className="nb-transition nb-duration-100 nb-ease-in-out nb-text-lg nb-font-semibold nb-text-primary-blue  nb-border-b-0 hover:nb-border-b-2 hover:nb-border-primary-red">Transfer
                        My Existing Website <i className="las la-arrow-right nb-ml-1"></i></Link>
                </div>
            </div>
            <div className="nb-w-full lg:nb-w-1/3 nb-mb-4 lg:nb-mb-0 lg:nb-ml-2">
                <div className="nb-border-2 nb-border-primary-bunty nb-relative">
                    <div className="nb-px-2 nb-flex">
                        <span className="nb-w-3 nb-h-3 nb-rounded-full nb-bg-primary-green hover:nb-bg-light-green nb-m-1"></span>
                        <span className="nb-w-3 nb-h-3 nb-rounded-full nb-bg-yellow-500 hover:nb-bg-yellow-400 nb-m-1"></span>
                        <span className="nb-w-3 nb-h-3 nb-rounded-full nb-bg-primary-red hover:nb-bg-light-red nb-m-1"></span>
                    </div>
                    <div id="play-video-header"
                        className="nb-absolute nb-cursor-pointer nb-h-20 nb-w-20 nb-bg-gray-100 hover:nb-bg-gray-200 nb-bg-opacity-75 nb-flex nb-items-center nb-justify-center nb-p-8 nb-rounded-full"
                        style={{top:"40%",left:"45%"}}>
                        <i className="las la-play la-4x nb-text-primary-bunty"></i>
                    </div>
                    <img src="/images/landing-hero-img.jpeg" className="nb-w-full" alt="Hero" />
                </div>
            </div>
        </div>
    </div>
</section>
        </>
    )
}

export default PageHeroOne;