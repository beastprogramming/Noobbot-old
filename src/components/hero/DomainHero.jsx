import React from 'react';
import {Link} from 'react-router-dom';

function DomainHero() {
    return (
        <>
        <div className="nb-grid nb-grid-cols-1 lg:nb-grid-cols-5 nb-gap-4">
            <div className="nb-p-4 lg:nb-p-8 nb-col-span-3">
                <h1 className="nb-text-2xl md:nb-text-4xl lg:nb-text-5xl nb-font-bold nb-text-primary-bunty nb-leading-tight ">Get a Domain Name
                </h1>
                <h2 className="nb-text-sm md:nb-text-lg lg:nb-text-xl nb-font-medium nb-text-primary-bunty  nb-mb-4 md:nb-mb-8">With Privacy
                    Protection and lots more</h2>
                <div className="nb-mb-8">
                    <form className="nb-w-full nb-flex nb-flex-col md:nb-flex-row md:nb-items-center" action="" method="">
                        <input
                            className="nb-rounded-l nb-w-full nb-h-16 nb-border-primary-blue focus:nb-border-primary-blue focus:nb-outline-0 nb-border-2 nb-border-r-2 md:nb-border-r-0 nb-p-2 nb-bg-transparent focus:nb-bg-transparent nb-text-primary-bunty nb-text-xl nb-mb-2 md:nb-mb-0"
                            type="text" name="domain" nb-placeholder="Find your ideal domain name." autocomnb-plete="off" />
                        <input
                            className="nb-rounded-r nb-h-16 nb-border-primary-blue nb-border-2 nb-p-2 nb-text-xl nb-font-bold nb-bg-primary-blue nb-text-white nb-cursor-pointer"
                            type="submit" value="Find Domain" />
                    </form>
                </div>

                <div className="nb-flex nb-flex-col md:nb-flex-row md:justify-between nb-mb-4">
                    <div className="nb-mb-2">
                        <div className="nb-flex nb-items-center ">
                            <p className="nb-text-2xl md:nb-text-3xl lg:nb-text-4xl nb-font-bold nb-text-primary-red nb-mr-4">Get</p>
                            <p className="nb-text-lg md:nb-text-xl lg:nb-text-2xl nb-font-bold nb-text-primary-bunty nb-mr-2">Domain</p>
                            <span className="nb-text-xl md:nb-text-2xl lg:nb-text-3xl nb-font-bold nb-text-primary-red nb-mr-2">+</span>
                            <p className="nb-text-lg md:nb-text-xl lg:nb-text-2xl nb-font-bold nb-text-primary-bunty nb-mr-2">5 Page Website</p>
                        </div>
                        <p className="nb-text-sm lg:nb-text-lg nb-font-medium nb-text-primary-bunty nb-leading-tight ">Starting @<span className="nb-text-primary-blue nb-pl-2 nb-font-bold">₹ 190.80/mo</span></p>

                    </div>
                    <Link to="#"
                        className="nb-h-12 nb-rounded nb-border-primary-red nb-border-2 nb-p-2 nb-text-xl nb-font-bold nb-bg-primary-red nb-text-white nb-cursor-pointer">Get
                        Started</Link>
                </div>
                
            </div>
            <div className="hidden lg:block nb-col-span-2">
                <img src="./images/patterns/Thur.svg" alt="Noobbot Hero" />
            </div>
        </div>
        </>
    )
}

export default DomainHero;