import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


function Offers() {
    // Fetch Data
    const [promos, setPromos] = useState({});
    useEffect(() => {
        fetch(`/api/resellers/promo-details.json?auth-userid=795300&api-key=sOZ7I52D5Jx8Vtbkxfnn1PYIVoqL0D5O`)
        .then((response) => response.json())
        .then(setPromos);
    }, [])
    // Fetch Domains Information
    const [domainInfo, setDomainInfo] = useState({});
    useEffect(() => {
        fetch(`/domains.json`)
        .then((response) => response.json())
        .then(setDomainInfo);
    }, [])
    return (
        <>
        
        <section className="nb-py-8 nb-bg-gray-100">
            <div className="nb-container nb-p-4">
                <div className="nb-grid nb-grid-cols-1 md:nb-grid-cols-2 lg:nb-grid-cols-4  nb-gap-4 nb-my-8">
                {Object.keys(promos).map((offer, i) => {
                    return(
                    <div className="nb-shadow-sm hover:nb-shadow-lg nb-rounded-t-sm nb-bg-white" key={i}>
                        <div className="nb-p-4">

                            {Object.keys(domainInfo).map((di, index) => {
                                return (
                                    <p className="nb-text-lg nb-font-bold nb-text-primary-bunty">
                                        { promos[offer].productkey === di ?(domainInfo[di].text): null }
                                    </p>
                                )
                            })}
                            <div className="nb-pt-2 nb-flex nb-justify-between nb-border-t">
                                <p className="nb-text-lg nb-font-bold nb-text-primary-blue">₹{promos[offer].customerprice} </p>
                                <p className="nb-text-md nb-font-bold nb-line-through nb-text-primary-bunty nb-opacity-50">₹{promos[offer].barrierprice}</p>
                            </div>
                        </div>
                        <Link to="#" title="Apply Offer" target="_self" className="">
                            <div className="nb-p-2 nb-bg-primary-blue  nb-font-bold nb-rounded-b-sm nb-text-white nb-w-auto nb-text-center">Apply Offer</div>
                        </Link>
                    </div>
                    )
                })} 
                </div>
            </div>
        </section>
        </>
    )
}

export default Offers;