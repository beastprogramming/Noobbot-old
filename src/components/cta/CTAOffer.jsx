import React from "react";
import {Link} from "react-router-dom";

function CTAOffer(){
    return(
        <>
        <section className="nb-py-4">
            <div className="nb-container nb-mx-auto">
                <div className="nb-flex nb-flex-col lg:nb-flex-row nb-justify-between nb-items-center nb-bg-primary-blue  nb-p-2 lg:nb-p-4 nb-text-center" style={{backgroundImage: "url('./images/patterns/Waihou.svg"}}>
                    <div className="nb-text-left">
                    <h3 className="nb-text-2xl lg:nb-text-3xl nb-font-bold nb-text-white nb-mb-2">FREE Add-ons with every Domain Name!</h3>
                    <h3 className="nb-text-sm lg:nb-text-xl nb-font-medium nb-text-white nb-mb-8 lg:nb-mb-0">Get over $100 worth of Free Services with every Domain you Register</h3>
                </div>
                    <Link to="#"><div className="nb-p-2 lg:nb-py-4 nb-px-8 nb-bg-white nb-rounded nb-text-primary-bunty nb-font-semibold nb-text-lg hover:nb-text-primary-blue">Learn More</div></Link>
                </div>
            </div>
        </section>
        </>
    )
}

export default CTAOffer;