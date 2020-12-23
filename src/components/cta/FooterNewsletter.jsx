import React from 'react';

function FooterNewsletter() {
    return (
        <>
        <div className="nb-bg-primary-bunty nb-text-primary-bunty">
            <div className="nb-bg-primary-bunty nb-text-white nb-px-6 md:nb-px-12 lg:nb-px-20 nb-py-8 nb-bg-cover "
            style={{backgroundImage: "url('https://www.lindholmen.se/sites/all/themes/lindholmen_v2/lindholmen_v2_lindholmen/images/footer-bg.svg')"}}>
            <div className="nb-flex nb-flex-col lg:nb-flex-row lg:nb-justify-between lg:nb-items-center">
                <div className="nb-block sm:nb-flex md:nb-block">
                <h2 className="nb-text-2xl md:nb-text-3xl lg:nb-text-4xl nb-font-bold nb-text-white nb-mr-2">Get inside the hustle.</h2>
                <h2 className="nb-text-2xl md:nb-text-3xl lg:nb-text-4xl nb-font-bold">Join the community.</h2>
                </div>
                <div className="nb-flex nb-flex-wrap nb-items-center nb-justify-center">
                <form className="nb-w-full nb-flex nb-flex-col md:nb-flex-row">
                    <div className="md:nb-pr-2 nb-w-100 md:nb-w-8/12">
                    <input className="nb-h-12 nb-rounded  nb-border-0 nb-bg-white focus:nb-bg-gray-100 nb-px-4 nb-font-bold nb-w-full nb-text-primary-blue"
                        type="text" placeholder="Enter your email" name="email" />
                    </div>
                    <input type="submit" value="Subscribe"
                    className="nb-h-12 nb-px-4 nb-rounded nb-bg-white nb-text-primary-blue nb-font-bold nb-w-100 md:w-4/12 hover:nb-bg-primary-blue hover:nb-text-white" />
                </form>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default FooterNewsletter;